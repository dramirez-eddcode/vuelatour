import Script from 'next/script';
import { getYearsOfExperienceFormatted, FOUNDING_YEAR } from '@/lib/constants';

interface LocalBusinessSchemaProps {
  locale: string;
  heroImageUrl?: string | null;
  fleetImageUrl?: string | null;
}

export function LocalBusinessSchema({ locale, heroImageUrl, fleetImageUrl }: LocalBusinessSchemaProps) {
  // Use dynamic images if available, fallback to static
  const heroImg = heroImageUrl || '/images/hero/hero-aerial-cancun.jpg';
  const fleetImg = fleetImageUrl || '/images/fleet/cessna-206.jpg';

  // Ensure URLs are absolute
  const getAbsoluteUrl = (url: string) => {
    if (url.startsWith('http')) return url;
    return `https://vuelatour.com${url}`;
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://vuelatour.com',
    name: 'Vuelatour',
    alternateName: locale === 'es' ? 'Vuelatour Cancún' : 'Vuelatour Cancun',
    description: locale === 'es'
      ? `Vuelos privados y tours aéreos panorámicos en Cancún y la Riviera Maya. ${getYearsOfExperienceFormatted()} años de experiencia.`
      : `Private charter flights and panoramic air tours in Cancún and the Riviera Maya. ${getYearsOfExperienceFormatted()} years of experience.`,
    url: 'https://vuelatour.com',
    telephone: '+52-998-740-7149',
    email: 'info@vuelatour.com',
    logo: {
      '@type': 'ImageObject',
      '@id': 'https://vuelatour.com/#logo',
      url: 'https://vuelatour.com/images/logo/vuelatour-logo.png',
      contentUrl: 'https://vuelatour.com/images/logo/vuelatour-logo.png',
      caption: locale === 'es'
        ? 'Vuelatour - Vuelos privados y tours aéreos en Cancún y Riviera Maya'
        : 'Vuelatour - Charter flights and air tours in Cancún and Riviera Maya',
      width: 150,
      height: 40,
      inLanguage: locale === 'es' ? 'es-MX' : 'en-US',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle 1 Aeropuerto Cancún',
      addressLocality: 'Cancún',
      addressRegion: 'Quintana Roo',
      postalCode: '77569',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.0367,
      longitude: -86.8770,
    },
    image: [
      {
        '@type': 'ImageObject',
        url: 'https://vuelatour.com/images/logo/vuelatour-logo.png',
        caption: locale === 'es' ? 'Logo de Vuelatour' : 'Vuelatour Logo',
        width: 150,
        height: 40,
      },
      getAbsoluteUrl(heroImg),
      getAbsoluteUrl(fleetImg),
    ],
    priceRange: '$299 - $1,500 USD',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '19:00',
    },
    sameAs: [
      'https://facebook.com/vuelatour',
      'https://instagram.com/vuelatour',
      'https://tiktok.com/@vuelatour',
    ],
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  locale: string;
}

export function ServiceSchema({ locale }: ServiceSchemaProps) {
  const services = [
    {
      '@type': 'Service',
      name: locale === 'es' ? 'Vuelos Privados' : 'Private Charter Flights',
      description: locale === 'es'
        ? 'Vuelos privados a destinos en México, USA y Centroamérica'
        : 'Private flights to destinations in Mexico, USA, and Central America',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Vuelatour',
      },
      areaServed: {
        '@type': 'Place',
        name: 'Riviera Maya, Mexico',
      },
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: '450',
        },
      },
    },
    {
      '@type': 'Service',
      name: locale === 'es' ? 'Tours Aéreos Panorámicos' : 'Panoramic Air Tours',
      description: locale === 'es'
        ? 'Tours aéreos sobre Cancún, Tulum, Chichén Itzá y más'
        : 'Air tours over Cancún, Tulum, Chichén Itzá and more',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Vuelatour',
      },
      areaServed: {
        '@type': 'Place',
        name: 'Cancún, Quintana Roo',
      },
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: '299',
        },
      },
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': services,
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface TourSchemaProps {
  tour: {
    name: string;
    description: string;
    image: string;
    price: string;
    duration: string;
  };
  locale: string;
}

export function TourSchema({ tour, locale }: TourSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.name,
    description: tour.description,
    image: `https://vuelatour.com${tour.image}`,
    touristType: locale === 'es' ? 'Turistas y viajeros' : 'Tourists and travelers',
    offers: {
      '@type': 'Offer',
      price: tour.price.replace('$', '').replace(',', ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    itinerary: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: locale === 'es' ? 'Despegue desde Aeropuerto de Cancún' : 'Departure from Cancún Airport',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: tour.name,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: locale === 'es' ? 'Regreso a Cancún' : 'Return to Cancún',
        },
      ],
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Vuelatour',
      url: 'https://vuelatour.com',
    },
  };

  return (
    <Script
      id={`tour-schema-${tour.name.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface OrganizationSchemaProps {
  locale: string;
}

export function OrganizationSchema({ locale }: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://vuelatour.com/#organization',
    name: 'Vuelatour',
    alternateName: ['Vuelatour Cancún', 'Vuelatour Mexico', 'Vuelos Privados Cancún'],
    url: 'https://vuelatour.com',
    logo: {
      '@type': 'ImageObject',
      '@id': 'https://vuelatour.com/#logo',
      url: 'https://vuelatour.com/images/logo/vuelatour-logo.png',
      contentUrl: 'https://vuelatour.com/images/logo/vuelatour-logo.png',
      caption: locale === 'es'
        ? 'Vuelatour - Empresa de vuelos privados y tours aéreos en Cancún, México'
        : 'Vuelatour - Charter flights and air tours company in Cancún, Mexico',
      width: 150,
      height: 40,
      encodingFormat: 'image/png',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://vuelatour.com/images/logo/vuelatour-logo.png',
      width: 150,
      height: 40,
    },
    description: locale === 'es'
      ? `Vuelatour es una empresa de aviación que ofrece vuelos privados charter y tours aéreos panorámicos en Cancún, Riviera Maya y toda la Península de Yucatán. Con más de ${getYearsOfExperienceFormatted()} años de experiencia y certificaciones TAI & TAN.`
      : `Vuelatour is an aviation company offering private charter flights and panoramic air tours in Cancún, Riviera Maya, and the entire Yucatan Peninsula. With over ${getYearsOfExperienceFormatted()} years of experience and TAI & TAN certifications.`,
    foundingDate: String(FOUNDING_YEAR),
    foundingLocation: {
      '@type': 'Place',
      name: 'Cancún, Quintana Roo, México',
    },
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 21.0367,
          longitude: -86.8770,
        },
        geoRadius: '500 km',
      },
      {
        '@type': 'Place',
        name: 'Cancún',
      },
      {
        '@type': 'Place',
        name: 'Riviera Maya',
      },
      {
        '@type': 'Place',
        name: 'Quintana Roo',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+52-998-740-7149',
      contactType: locale === 'es' ? 'Reservaciones' : 'Reservations',
      email: 'info@vuelatour.com',
      availableLanguage: ['Spanish', 'English'],
      areaServed: 'MX',
    },
    sameAs: [
      'https://facebook.com/vuelatour',
      'https://instagram.com/vuelatour',
      'https://tiktok.com/@vuelatour',
    ],
    slogan: locale === 'es'
      ? 'La forma más rápida y exclusiva de explorar el Caribe mexicano'
      : 'The fastest and most exclusive way to explore the Mexican Caribbean',
    knowsAbout: locale === 'es'
      ? ['Vuelos privados', 'Tours aéreos', 'Aviación', 'Turismo en Cancún', 'Riviera Maya']
      : ['Private flights', 'Air tours', 'Aviation', 'Cancún tourism', 'Riviera Maya'],
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://vuelatour.com${item.url}`,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  faqs: Array<{ question: string; answer: string }>;
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface AircraftPricing {
  aircraft_name: string;
  max_passengers: number;
  price_usd: number;
  notes_es?: string;
  notes_en?: string;
}

interface DestinationProductSchemaProps {
  destination: {
    name_es: string;
    name_en: string;
    description_es?: string | null;
    description_en?: string | null;
    slug: string;
    image_url?: string | null;
    flight_time?: string | null;
    aircraft_pricing?: AircraftPricing[] | null;
  };
  locale: string;
}

export function DestinationProductSchema({ destination, locale }: DestinationProductSchemaProps) {
  const name = locale === 'es' ? destination.name_es : destination.name_en;
  const description = locale === 'es' ? destination.description_es : destination.description_en;

  // Get absolute image URL
  const getAbsoluteUrl = (url: string) => {
    if (!url) return 'https://www.vuelatour.com/images/og/og-image.jpg';
    if (url.startsWith('http')) return url;
    return `https://www.vuelatour.com${url}`;
  };

  const imageUrl = getAbsoluteUrl(destination.image_url || '');

  // Get pricing information
  const aircraftPricing = destination.aircraft_pricing || [];
  const prices = aircraftPricing.map((p) => p.price_usd);
  const minPrice = prices.length > 0 ? Math.min(...prices) : null;
  const maxPrice = prices.length > 0 ? Math.max(...prices) : null;

  // If multiple pricing options, use AggregateOffer, otherwise use single Offer
  const offers = aircraftPricing.length > 1 ? {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: minPrice,
    highPrice: maxPrice,
    offerCount: aircraftPricing.length,
    offers: aircraftPricing.map((pricing) => ({
      '@type': 'Offer',
      name: `${name} - ${pricing.aircraft_name}`,
      price: pricing.price_usd,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      url: `https://www.vuelatour.com/${locale}/charter-flights/${destination.slug}`,
      description: locale === 'es'
        ? `Hasta ${pricing.max_passengers} pasajeros - ${pricing.aircraft_name}`
        : `Up to ${pricing.max_passengers} passengers - ${pricing.aircraft_name}`,
    })),
  } : aircraftPricing.length === 1 ? {
    '@type': 'Offer',
    price: aircraftPricing[0].price_usd,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
    url: `https://www.vuelatour.com/${locale}/charter-flights/${destination.slug}`,
  } : null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: locale === 'es' ? `Vuelo Privado a ${name}` : `Private Flight to ${name}`,
    description: description || (locale === 'es'
      ? `Vuelo privado desde Cancún a ${name}. Servicio exclusivo y horarios flexibles.`
      : `Private flight from Cancún to ${name}. Exclusive service and flexible schedules.`),
    image: imageUrl,
    brand: {
      '@type': 'Brand',
      name: 'Vuelatour',
    },
    offers: offers || {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `https://www.vuelatour.com/${locale}/charter-flights/${destination.slug}`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
    url: `https://www.vuelatour.com/${locale}/charter-flights/${destination.slug}`,
    category: locale === 'es' ? 'Vuelos Privados' : 'Private Charter Flights',
  };

  return (
    <Script
      id="destination-product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface TourProductSchemaProps {
  tour: {
    name_es: string;
    name_en: string;
    description_es?: string | null;
    description_en?: string | null;
    slug: string;
    image_url?: string | null;
    duration?: string | null;
    aircraft_pricing?: AircraftPricing[] | null;
  };
  locale: string;
}

export function TourProductSchema({ tour, locale }: TourProductSchemaProps) {
  const name = locale === 'es' ? tour.name_es : tour.name_en;
  const description = locale === 'es' ? tour.description_es : tour.description_en;

  // Get absolute image URL
  const getAbsoluteUrl = (url: string) => {
    if (!url) return 'https://www.vuelatour.com/images/og/og-image.jpg';
    if (url.startsWith('http')) return url;
    return `https://www.vuelatour.com${url}`;
  };

  const imageUrl = getAbsoluteUrl(tour.image_url || '');

  // Get pricing information
  const aircraftPricing = tour.aircraft_pricing || [];
  const prices = aircraftPricing.map((p) => p.price_usd);
  const minPrice = prices.length > 0 ? Math.min(...prices) : null;
  const maxPrice = prices.length > 0 ? Math.max(...prices) : null;

  // If multiple pricing options, use AggregateOffer, otherwise use single Offer
  const offers = aircraftPricing.length > 1 ? {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: minPrice,
    highPrice: maxPrice,
    offerCount: aircraftPricing.length,
    offers: aircraftPricing.map((pricing) => ({
      '@type': 'Offer',
      name: `${name} - ${pricing.aircraft_name}`,
      price: pricing.price_usd,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      url: `https://www.vuelatour.com/${locale}/air-tours/${tour.slug}`,
      description: locale === 'es'
        ? `Hasta ${pricing.max_passengers} pasajeros - ${pricing.aircraft_name}`
        : `Up to ${pricing.max_passengers} passengers - ${pricing.aircraft_name}`,
    })),
  } : aircraftPricing.length === 1 ? {
    '@type': 'Offer',
    price: aircraftPricing[0].price_usd,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
    url: `https://www.vuelatour.com/${locale}/air-tours/${tour.slug}`,
  } : null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description || (locale === 'es'
      ? `Tour aéreo panorámico sobre ${name}. Vive una experiencia única.`
      : `Panoramic air tour over ${name}. Live a unique experience.`),
    image: imageUrl,
    brand: {
      '@type': 'Brand',
      name: 'Vuelatour',
    },
    offers: offers || {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `https://www.vuelatour.com/${locale}/air-tours/${tour.slug}`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
    url: `https://www.vuelatour.com/${locale}/air-tours/${tour.slug}`,
    category: locale === 'es' ? 'Tours Aéreos' : 'Air Tours',
  };

  return (
    <Script
      id="tour-product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}