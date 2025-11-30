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
    .eq('slug', 'cookies')
    .single();

  const title = locale === 'es'
    ? page?.title_es || 'Política de Cookies'
    : page?.title_en || 'Cookie Policy';

  return {
    title: `${title} | Vuelatour`,
    description: locale === 'es'
      ? 'Información sobre el uso de cookies en Vuelatour'
      : 'Information about cookie usage on Vuelatour',
  };
}

export default async function CookiesPage({ params }: PageProps) {
  const { locale } = await params;
  const supabase = await createClient();

  const { data: page } = await supabase
    .from('legal_pages')
    .select('*')
    .eq('slug', 'cookies')
    .single();

  return (
    <LegalPageContent
      locale={locale}
      page={page}
      fallbackTitle={{ es: 'Política de Cookies', en: 'Cookie Policy' }}
    />
  );
}
