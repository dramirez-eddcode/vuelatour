'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Testimonials */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Google Reviews</h3>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent-yellow text-xl">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-300 mb-2">
                "Excellent service! The flight was smooth and the views were incredible.
                Highly recommend Vuelatour for anyone visiting Cancun."
              </p>
              <p className="text-xs text-gray-400">- John D.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent-yellow text-xl">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-300 mb-2">
                "Una experiencia inolvidable. Los pilotos son muy profesionales y conocen
                perfectamente la zona. ¡Volveremos!"
              </p>
              <p className="text-xs text-gray-400">- María G.</p>
            </div>
          </div>

          {/* Column 2 - Branding and Legal */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <Link href={`/${locale}`} className="flex items-center">
              <span className="text-5xl font-heading font-bold tracking-tight">
                vuelat
                <span className="relative">
                  o
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary-red rounded-full"></span>
                </span>
                ur
              </span>
            </Link>

            <div className="flex flex-col gap-2 text-sm text-center">
              <Link
                href={`/${locale}/terms`}
                className="hover:text-accent-yellow transition-colors"
              >
                {t('footer.terms')}
              </Link>
              <Link
                href={`/${locale}/privacy`}
                className="hover:text-accent-yellow transition-colors"
              >
                {t('footer.privacy')}
              </Link>
            </div>

            <p className="text-xs text-gray-400">
              © 2025 Vuelatour. {t('footer.rights')}
            </p>
          </div>

          {/* Column 3 - Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">
              {locale === 'es' ? 'Contacto' : 'Contact'}
            </h3>

            <div className="flex items-start gap-3">
              <MapPinIcon className="w-6 h-6 text-accent-yellow flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm">{t('contact.address')}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <PhoneIcon className="w-6 h-6 text-accent-yellow flex-shrink-0" />
              <a
                href="tel:+529987407149"
                className="text-sm hover:text-accent-yellow transition-colors"
              >
                {t('contact.phone')}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <EnvelopeIcon className="w-6 h-6 text-accent-yellow flex-shrink-0" />
              <a
                href="mailto:info@vuelatour.com"
                className="text-sm hover:text-accent-yellow transition-colors"
              >
                {t('contact.email')}
              </a>
            </div>

            <div className="pt-4">
              <p className="text-xs text-gray-400">
                FAA Certified • 15+ Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
