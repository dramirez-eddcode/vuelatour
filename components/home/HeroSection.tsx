'use client';

import { useTranslations } from 'next-intl';
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const t = useTranslations('hero');

  // Carrusel de imágenes
  const images = [
    '/images/hero/hero-main.png',
    '/images/hero/hero-main2.png',
    '/images/hero/hero-main3.png',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Cambiar imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-primary-gray">
              {t('subtitle')}
            </p>

            {/* Social Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:scale-110"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white rounded-full hover:opacity-90 transition-all hover:scale-110"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white text-red-600 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
              >
                <FaGoogle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Hero Image Carousel */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto">
              {/* Image Container with Carousel */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-blue-100">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Vuelatour - Vista ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                      index === currentImage ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>

              {/* Indicators */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImage
                        ? 'bg-primary-red w-8'
                        : 'bg-gray-400 hover:bg-gray-600'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-yellow rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-blue rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
