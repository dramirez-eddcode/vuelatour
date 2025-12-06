'use client';

import dynamic from 'next/dynamic';
import LazySection from '@/components/ui/LazySection';

// Dynamically import TripAdvisor widget to avoid SSR issues
const TripAdvisorReviewsWidget = dynamic(
  () => import('@/components/widgets/TripAdvisorReviewsWidget'),
  { ssr: false }
);

interface TripAdvisorSectionProps {
  locale: string;
}

const translations = {
  es: {
    title: 'Lo que dicen nuestros clientes',
    subtitle: 'Opiniones verificadas en TripAdvisor',
  },
  en: {
    title: 'What our clients say',
    subtitle: 'Verified reviews on TripAdvisor',
  },
};

export default function TripAdvisorSection({ locale }: TripAdvisorSectionProps) {
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <LazySection animation="fade" className="py-16 md:py-20 bg-gray-50 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted">
            {t.subtitle}
          </p>
        </div>

        <div className="flex justify-center">
          <TripAdvisorReviewsWidget />
        </div>
      </div>
    </LazySection>
  );
}
