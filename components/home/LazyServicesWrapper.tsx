'use client';

import LazySection from '@/components/ui/LazySection';
import ServicesSection from './ServicesSection';

interface Destination {
  id: string;
  slug: string;
  name_es: string;
  name_en: string;
  description_es: string | null;
  description_en: string | null;
  flight_time: string | null;
  price_from: number | null;
  image_url: string | null;
}

interface AirTour {
  id: string;
  slug: string;
  name_es: string;
  name_en: string;
  description_es: string | null;
  description_en: string | null;
  duration: string | null;
  price_from: number | null;
  image_url: string | null;
  highlights_es: string[] | null;
  highlights_en: string[] | null;
}

interface LazyServicesWrapperProps {
  locale: string;
  destinations: Destination[];
  tours: AirTour[];
}

export default function LazyServicesWrapper({ locale, destinations, tours }: LazyServicesWrapperProps) {
  return (
    <LazySection
      animation="slide-up"
      delay={100}
      className="transition-all duration-700"
    >
      <ServicesSection
        locale={locale}
        destinations={destinations}
        tours={tours}
      />
    </LazySection>
  );
}
