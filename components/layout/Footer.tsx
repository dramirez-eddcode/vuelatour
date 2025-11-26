'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaGoogle
} from 'react-icons/fa';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const quickLinks = [
    { label: t('nav.home'), href: `/${locale}` },
    { label: t('nav.charterFlights'), href: `/${locale}/charter-flights` },
    { label: t('nav.airTours'), href: `/${locale}/air-tours` },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com', color: 'hover:text-blue-400' },
    { icon: FaInstagram, href: 'https://instagram.com', color: 'hover:text-pink-400' },
    { icon: FaTiktok, href: 'https://tiktok.com', color: 'hover:text-white' },
    { icon: FaWhatsapp, href: 'https://wa.me/5219987407149', color: 'hover:text-green-400' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-primary-dark to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Top Decorative Wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-red via-accent-cyan to-accent-purple" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 border-b border-white/10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-red/20 to-accent-cyan/20 rounded-full mb-6"
            >
              <PaperAirplaneIcon className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm font-semibold">
                {locale === 'es' ? 'Mantente Informado' : 'Stay Informed'}
              </span>
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {locale === 'es'
                ? 'Recibe Ofertas Exclusivas'
                : 'Get Exclusive Offers'}
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {locale === 'es'
                ? 'Suscríbete a nuestro newsletter y recibe descuentos especiales, noticias y tips de viaje.'
                : 'Subscribe to our newsletter and receive special discounts, news, and travel tips.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder={locale === 'es' ? 'Tu correo electrónico' : 'Your email address'}
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-cyan"
              />
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-red to-red-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
              >
                {locale === 'es' ? 'Suscribirse' : 'Subscribe'}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href={`/${locale}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <span className="text-4xl font-heading font-bold">
                  <span className="bg-gradient-to-r from-white via-accent-cyan to-white bg-clip-text text-transparent">
                    vuelatour
                  </span>
                </span>
              </motion.div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              {locale === 'es'
                ? 'Experiencias aéreas premium en Cancún. Descubre el Caribe desde una perspectiva única con nuestros tours y vuelos chárter.'
                : 'Premium air experiences in Cancún. Discover the Caribbean from a unique perspective with our tours and charter flights.'}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-11 h-11 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center ${social.color} transition-colors border border-white/10`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">
              {locale === 'es' ? 'Enlaces Rápidos' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-cyan transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-red group-hover:bg-accent-cyan transition-colors" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 space-y-3">
              <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                {locale === 'es' ? 'Legal' : 'Legal'}
              </h5>
              <motion.div whileHover={{ x: 5 }}>
                <Link href={`/${locale}/terms`} className="text-gray-400 hover:text-accent-cyan transition-colors text-sm">
                  {t('footer.terms')}
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }}>
                <Link href={`/${locale}/privacy`} className="text-gray-400 hover:text-accent-cyan transition-colors text-sm">
                  {t('footer.privacy')}
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">
              {locale === 'es' ? 'Contacto' : 'Contact'}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPinIcon className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{t('contact.address')}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <PhoneIcon className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                <a
                  href="tel:+529987407149"
                  className="text-gray-400 hover:text-accent-cyan transition-colors"
                >
                  {t('contact.phone')}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <EnvelopeIcon className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                <a
                  href="mailto:info@vuelatour.com"
                  className="text-gray-400 hover:text-accent-cyan transition-colors"
                >
                  {t('contact.email')}
                </a>
              </li>
            </ul>
          </div>

          {/* Google Reviews */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">
              {locale === 'es' ? 'Reseñas' : 'Reviews'}
            </h4>
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4"
              >
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mb-2 line-clamp-3">
                  "Excellent service! The flight was smooth and the views were incredible."
                </p>
                <p className="text-xs text-gray-500">- John D.</p>
              </motion.div>

              <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                <FaGoogle className="w-8 h-8 text-white" />
                <div>
                  <div className="text-2xl font-bold">4.9/5</div>
                  <div className="text-xs text-gray-400">Google Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © 2025 Vuelatour. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                FAA Certified
              </span>
              <span>15+ {locale === 'es' ? 'Años de Experiencia' : 'Years Experience'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-primary-red via-accent-cyan to-accent-purple" />
    </footer>
  );
}
