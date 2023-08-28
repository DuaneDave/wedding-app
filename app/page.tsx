import Loader from '@/component/Loader';
import HeroSection from '@/component/homepage/HeroSection';
import Event from '@/component/homepage/Event';

export default function Home() {
  return (
    <>
      <Loader />
      <HeroSection />
      <Event />
    </>
  );
}
