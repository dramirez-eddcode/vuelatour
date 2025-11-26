import HeroSection from '@/components/home/HeroSection';
import FlyAndDiveSection from '@/components/home/FlyAndDiveSection';
import AirToursSection from '@/components/home/AirToursSection';
import CharterFlightsSection from '@/components/home/CharterFlightsSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import JetsetBanner from '@/components/home/JetsetBanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FlyAndDiveSection />
      <AirToursSection />
      <CharterFlightsSection />
      <WhyChooseSection />
      <JetsetBanner />
    </>
  );
}
