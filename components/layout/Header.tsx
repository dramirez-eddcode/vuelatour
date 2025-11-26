'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp
} from 'react-icons/fa';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (newLocale: string) => {
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Top Bar - Glassmorphism */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-primary-red/95 backdrop-blur-md'
            : 'bg-gradient-to-r from-primary-red via-primary-red to-red-600'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2.5">
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: FaFacebook, href: 'https://facebook.com' },
                { icon: FaInstagram, href: 'https://instagram.com' },
                { icon: FaTiktok, href: 'https://tiktok.com' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/90 hover:text-white transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center gap-6 text-white/90 text-sm">
              <motion.a
                href="https://wa.me/5219987407149"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp</span>
              </motion.a>
              <a
                href="tel:+529987407149"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>{t('contact.phone')}</span>
              </a>
              <a
                href="mailto:info@vuelatour.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <EnvelopeIcon className="w-4 h-4" />
                <span>{t('contact.email')}</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation - Premium Glassmorphism */}
      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-2xl shadow-xl border-b border-gray-200/60'
            : 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100/50'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href={`/${locale}`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2"
              >
                <div className="relative">
                  <span className="text-3xl font-heading font-bold bg-gradient-to-r from-primary-dark via-primary-red to-primary-dark bg-clip-text text-transparent">
                    vuelatour
                  </span>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-1 -right-2 w-2.5 h-2.5 bg-primary-red rounded-full shadow-lg shadow-primary-red/50"
                  />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: t('nav.home'), href: `/${locale}` },
                { label: t('nav.charterFlights'), href: `/${locale}/charter-flights` },
                { label: t('nav.airTours'), href: `/${locale}/air-tours` },
              ].map((item, index) => (
                <motion.div key={index} whileHover={{ y: -2 }}>
                  <Link
                    href={item.href}
                    className="relative text-primary-gray hover:text-primary-red transition-colors font-medium group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-red to-red-600 group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}

              {/* Language Switcher - Modern Pills */}
              <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200">
                <GlobeAltIcon className="w-5 h-5 text-gray-400" />
                <div className="flex gap-1 bg-gray-100 p-1 rounded-full">
                  {['es', 'en'].map((lang) => (
                    <motion.button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                        locale === lang
                          ? 'bg-gradient-to-r from-primary-red to-red-600 text-white shadow-md'
                          : 'text-gray-600 hover:text-primary-red'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-primary-dark" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-primary-dark" />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden border-t border-gray-200"
              >
                <div className="py-4 space-y-2">
                  {[
                    { label: t('nav.home'), href: `/${locale}` },
                    { label: t('nav.charterFlights'), href: `/${locale}/charter-flights` },
                    { label: t('nav.airTours'), href: `/${locale}/air-tours` },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-3 rounded-lg text-primary-gray hover:text-primary-red hover:bg-red-50 transition-all font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  <div className="flex gap-2 pt-4 px-4">
                    {[
                      { lang: 'es', flag: '🇲🇽', label: 'Español' },
                      { lang: 'en', flag: '🇺🇸', label: 'English' }
                    ].map((item) => (
                      <motion.button
                        key={item.lang}
                        onClick={() => {
                          changeLanguage(item.lang);
                          setMobileMenuOpen(false);
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all ${
                          locale === item.lang
                            ? 'bg-gradient-to-r from-primary-red to-red-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <span className="text-lg">{item.flag}</span>
                        <span className="text-sm">{item.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}
