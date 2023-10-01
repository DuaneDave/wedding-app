'use client';

import { useEffect } from 'react';


import Loader from '@/component/Loader';
import HeroSection from '@/component/homepage/HeroSection';
import Event from '@/component/homepage/Event';
import SlideShow from '@/component/slideShow/SlideShow';
import Details from '@/component/details/Details';

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      {/* <Loader /> */}
      <HeroSection />
      <Event />
      <SlideShow />
      <Details />
      <SlideShow />
    </>
  );
}
