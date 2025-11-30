import { createClient } from '@/lib/supabase/server';
import LegalPageContent from '@/components/legal/LegalPageContent';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const supabase = await createClient();

  const { data: page } = await supabase
    .from('legal_pages')
    .select('title_es, title_en')
    .eq('slug', 'terms')
    .single();

  const title = locale === 'es'
    ? page?.title_es || 'Términos y Condiciones'
    : page?.title_en || 'Terms and Conditions';

  return {
    title: `${title} | Vuelatour`,
    description: locale === 'es'
      ? 'Términos y condiciones de uso de los servicios de Vuelatour'
      : 'Terms and conditions of use for Vuelatour services',
  };
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const supabase = await createClient();

  const { data: page } = await supabase
    .from('legal_pages')
    .select('*')
    .eq('slug', 'terms')
    .single();

  return (
    <LegalPageContent
      locale={locale}
      page={page}
      fallbackTitle={{ es: 'Términos y Condiciones', en: 'Terms and Conditions' }}
    />
  );
}
