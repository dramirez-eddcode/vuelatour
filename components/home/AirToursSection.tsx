'use client';

import { useTranslations } from 'next-intl';
import { PencilIcon } from '@heroicons/react/24/outline';

export default function AirToursSection() {
  const t = useTranslations('airTours');

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Circular Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl bg-gray-50">
                <img
                  src="/images/sections/aerealView.png"
                  alt="Vista aérea del océano - Vuelatour Air Tours"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Edit Icon Badge */}
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-accent-yellow rounded-full flex items-center justify-center shadow-lg">
                <PencilIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark">
              {t('title')}
            </h2>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary-red">
                {t('subtitle1')}
              </h3>
              <p className="text-lg text-primary-gray leading-relaxed">
                {t('description1')}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary-red">
                {t('subtitle2')}
              </h3>
              <p className="text-lg text-primary-gray leading-relaxed">
                {t('description2')}
              </p>
            </div>

            <p className="text-xl font-semibold text-primary-dark pt-4">
              {t('cta')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
