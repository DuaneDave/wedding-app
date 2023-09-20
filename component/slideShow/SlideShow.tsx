import React from 'react';

import styles from './slide.module.css';

import SlideLowerArrow from '@/public/svg/slideLowerArrow';
import SlideUpperArrow from '@/public/svg/slideUpperArrow';
import Slide from './Slide';

import slide1 from '@/public/images/image1.jpg';
import slide2 from '@/public/images/image2.jpg';
import slide3 from '@/public/images/image3.jpg';
import slide4 from '@/public/images/image4.jpg';

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
