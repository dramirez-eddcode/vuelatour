'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { PaperAirplaneIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

export default function HeroSection() {
  const t = useTranslations('hero');
  const [currentImage, setCurrentImage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const images = [
    '/images/hero/hero-main.png',
    '/images/hero/hero-main2.png',
    '/images/hero/hero-main3.png',
  ];

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Smooth spring animation
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothY = useSpring(y, springConfig);

  // Image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Mouse move effect for 3D tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Subtle animated gradients */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(230, 57, 70, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(69, 123, 157, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(230, 57, 70, 0.08) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            style={{ y: smoothY, opacity }}
            className="space-y-8 lg:pr-8"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-red/10 via-accent-cyan/10 to-accent-purple/10 backdrop-blur-sm rounded-full border border-primary-red/20 shadow-sm"
            >
              <SparklesIcon className="w-4 h-4 text-primary-red" />
              <span className="text-sm font-semibold bg-gradient-to-r from-primary-red to-accent-purple bg-clip-text text-transparent">
                Premium Air Experience
              </span>
            </motion.div>

            {/* Main Title - Premium Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight">
                <span className="text-primary-dark">
                  {t('title').split(' ').slice(0, 3).join(' ')}
                </span>
                <br />
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="bg-gradient-to-r from-primary-red via-accent-cyan to-accent-purple bg-clip-text text-transparent"
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Experiencia Única
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed font-light"
            >
              {t('subtitle')}
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-red via-red-600 to-primary-red text-white rounded-full font-semibold shadow-xl shadow-primary-red/25 overflow-hidden border border-red-700/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Reservar Ahora
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRightIcon className="w-5 h-5" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-primary-dark rounded-full font-semibold shadow-lg border-2 border-gray-200 hover:border-primary-red/30 transition-all"
              >
                Ver Tours
              </motion.button>
            </motion.div>

            {/* Premium Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { value: '15+', label: 'Años' },
                { value: '5000+', label: 'Vuelos' },
                { value: '4.9★', label: 'Rating' },
              ].map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-br from-primary-red to-accent-purple bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Premium Circular Image Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Main circular container matching your design */}
            <div className="relative w-full max-w-[600px] aspect-square">
              {/* Subtle glow effect behind */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-primary-red/20 via-accent-cyan/20 to-accent-purple/20 rounded-full blur-3xl"
              />

              {/* Image container - circular with shadow like your design */}
              <motion.div
                style={{
                  rotateX: mousePosition.y * 3,
                  rotateY: mousePosition.x * 3,
                }}
                className="relative w-full h-full perspective-1000"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                  {/* Images */}
                  {images.map((image, index) => (
                    <motion.img
                      key={index}
                      src={image}
                      alt={`Vuelatour - Vista ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImage ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}

                  {/* Premium overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 pointer-events-none" />
                </div>

                {/* Elegant Navigation Dots - Outside bottom */}
                <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-3">
                  {images.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`transition-all rounded-full ${
                        index === currentImage
                          ? 'w-10 h-2 bg-gradient-to-r from-primary-red to-accent-purple'
                          : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Premium Floating Info Card */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-red via-red-600 to-accent-purple rounded-xl flex items-center justify-center shadow-lg">
                    <PaperAirplaneIcon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Próximo Vuelo</div>
                    <div className="text-xl font-bold bg-gradient-to-r from-primary-dark to-primary-red bg-clip-text text-transparent">
                      Disponible Hoy
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
