'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp
} from 'react-icons/fa';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (newLocale: string) => {
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <header className="w-full">
      {/* Top Red Bar */}
      <div className="bg-primary-red text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="https://wa.me/5219987407149"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+529987407149"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>{t('contact.phone')}</span>
              </a>
              <a
                href="mailto:info@vuelatour.com"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <EnvelopeIcon className="w-5 h-5" />
                <span>{t('contact.email')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center">
              <span className="text-3xl font-heading font-bold text-primary-dark tracking-tight">
                vuelat
                <span className="relative">
                  o
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary-red rounded-full"></span>
                </span>
                ur
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href={`/${locale}`}
                className="text-primary-gray hover:text-primary-red transition-colors font-medium"
              >
                {t('nav.home')}
              </Link>

              <div className="relative group">
                <button className="flex items-center gap-1 text-primary-gray hover:text-primary-red transition-colors font-medium">
                  {t('nav.charterFlights')}
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                {/* Dropdown menu can be added here */}
              </div>

              <div className="relative group">
                <button className="flex items-center gap-1 text-primary-gray hover:text-primary-red transition-colors font-medium">
                  {t('nav.airTours')}
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                {/* Dropdown menu can be added here */}
              </div>

              <div className="relative group">
                <button className="flex items-center gap-1 text-primary-gray hover:text-primary-red transition-colors font-medium">
                  {t('nav.more')}
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                {/* Dropdown menu can be added here */}
              </div>

              {/* Language Switcher - Visible Buttons */}
              <div className="flex items-center gap-2 border-l pl-4">
                <button
                  onClick={() => changeLanguage('es')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                    locale === 'es'
                      ? 'bg-primary-red text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-xl">🇲🇽</span>
                  <span>ES</span>
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                    locale === 'en'
                      ? 'bg-primary-red text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-xl">🇺🇸</span>
                  <span>EN</span>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <Link
                  href={`/${locale}`}
                  className="text-primary-gray hover:text-primary-red transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.home')}
                </Link>
                <Link
                  href={`/${locale}/charter-flights`}
                  className="text-primary-gray hover:text-primary-red transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.charterFlights')}
                </Link>
                <Link
                  href={`/${locale}/air-tours`}
                  className="text-primary-gray hover:text-primary-red transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.airTours')}
                </Link>

                <div className="flex gap-3 pt-4 border-t">
                  <button
                    onClick={() => {
                      changeLanguage('es');
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                      locale === 'es'
                        ? 'bg-primary-red text-white shadow-md'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="text-xl">🇲🇽</span>
                    <span>Español</span>
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage('en');
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                      locale === 'en'
                        ? 'bg-primary-red text-white shadow-md'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="text-xl">🇺🇸</span>
                    <span>English</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
