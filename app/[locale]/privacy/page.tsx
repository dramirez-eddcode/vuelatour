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
    .eq('slug', 'privacy')
    .single();

  const title = locale === 'es'
    ? page?.title_es || 'Aviso de Privacidad'
    : page?.title_en || 'Privacy Policy';

  return {
    title: `${title} | Vuelatour`,
    description: locale === 'es'
      ? 'Política de privacidad y protección de datos de Vuelatour'
      : 'Privacy policy and data protection of Vuelatour',
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  const supabase = await createClient();

  const { data: page } = await supabase
    .from('legal_pages')
    .select('*')
    .eq('slug', 'privacy')
    .single();

  return (
    <LegalPageContent
      locale={locale}
      page={page}
      fallbackTitle={{ es: 'Aviso de Privacidad', en: 'Privacy Policy' }}
    />
  );
}
