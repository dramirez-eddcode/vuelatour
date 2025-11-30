import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient, createBuildClient } from '@/lib/supabase/server';
import TourDetailContent from './TourDetailContent';

interface TourDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: TourDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const supabase = await createClient();

  const { data: tour } = await supabase
    .from('air_tours')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single();

  if (!tour) {
    return {
      title: locale === 'es' ? 'Tour no encontrado' : 'Tour not found',
    };
  }

  const name = locale === 'es' ? tour.name_es : tour.name_en;
  const description = locale === 'es' ? tour.description_es : tour.description_en;

  // Use custom meta fields from database if available, otherwise use fallbacks
  const metaTitle = locale === 'es'
    ? (tour.meta_title_es || `${name} - Tour Aéreo | Vuelatour`)
    : (tour.meta_title_en || `${name} - Air Tour | Vuelatour`);

  const metaDescription = locale === 'es'
    ? (tour.meta_description_es || description || `Tour aéreo panorámico: ${name}. Vive una experiencia única sobrevolando el Caribe mexicano.`)
    : (tour.meta_description_en || description || `Panoramic air tour: ${name}. Live a unique experience flying over the Mexican Caribbean.`);

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: tour.image_url ? [tour.image_url] : [],
      type: 'website',
      locale: locale === 'es' ? 'es_MX' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: tour.image_url ? [tour.image_url] : [],
    },
  };
}

export async function generateStaticParams() {
  const supabase = createBuildClient();

  const { data: tours } = await supabase
    .from('air_tours')
    .select('slug')
    .eq('is_active', true);

  const locales = ['es', 'en'];
  const params: { locale: string; slug: string }[] = [];

  tours?.forEach((tour) => {
    locales.forEach((locale) => {
      params.push({ locale, slug: tour.slug });
    });
  });

  return params;
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { locale, slug } = await params;
  const supabase = await createClient();

  const { data: tour } = await supabase
    .from('air_tours')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single();

  if (!tour) {
    notFound();
  }

  // Fetch other tours for "More tours" section
  const { data: otherTours } = await supabase
    .from('air_tours')
    .select('*')
    .eq('is_active', true)
    .neq('slug', slug)
    .order('display_order', { ascending: true })
    .limit(3);

  // Fetch available services for display
  const { data: availableServices } = await supabase
    .from('tour_services')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true });

  return (
    <TourDetailContent
      locale={locale}
      tour={tour}
      otherTours={otherTours || []}
      availableServices={availableServices || []}
    />
  );
}
