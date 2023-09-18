import React from 'react';

import styles from './slide.module.css';

import SlideLowerArrow from '@/public/svg/slideLowerArrow';
import SlideUpperArrow from '@/public/svg/slideUpperArrow';
import Slide from './Slide';

import slide1 from '@/public/images/slide1.png';
import slide2 from '@/public/images/slide2.png';
import slide3 from '@/public/images/slide3.png';
import slide4 from '@/public/images/slide4.png';

function SlideShow() {
  return (
    <section className={` full-width ${styles.slideContainer}`}>
      <SlideUpperArrow className="full-width" />
      <div className={`full-width ${styles.overlay}`} />

      <div className={`${styles.slide}`}>
        <Slide image={[slide4, slide3, slide2, slide1]} />
        <Slide image={[slide1, slide2, slide3, slide4]} />
        <Slide image={[slide4, slide3, slide2, slide1]} />
      </div>

      <div className={`full-width ${styles.overlay}`} />
      <SlideLowerArrow className="full-width" />
    </section>
  );
}

export default SlideShow;
