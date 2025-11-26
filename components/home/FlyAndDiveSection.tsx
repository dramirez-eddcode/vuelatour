'use client';

import { useTranslations } from 'next-intl';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function FlyAndDiveSection() {
  const t = useTranslations('flyAndDive');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark">
              {t('title')}
            </h2>
            <p className="text-lg text-primary-gray leading-relaxed">
              {t('cta')}
            </p>
            <p className="text-xl text-primary-red font-semibold">
              {t('description')}
            </p>

            <button className="group flex items-center gap-2 bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="font-semibold">{t('button')}</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column - Video */}
          <div className="relative">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-cyan-400">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/diving-underwater.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-yellow rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
