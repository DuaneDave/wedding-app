import Loader from '@/component/Loader';
import HeroSection from '@/component/homepage/HeroSection';
import Event from '@/component/homepage/Event';
import SlideShow from '@/component/slideShow/SlideShow';
import Details from '@/component/details/Details';

export default function Home() {
  return (
    <>
      {/* <Loader /> */}
      <HeroSection />
      <Event />
      <SlideShow />
      <Details />
    </>
  );
}
