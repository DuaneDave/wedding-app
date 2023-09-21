import React from 'react';

import styles from './slide.module.css';

import SlideLowerArrow from '@/public/svg/slideLowerArrow';
import SlideUpperArrow from '@/public/svg/slideUpperArrow';
import Slide from './Slide';

import slide1 from '@/public/images/slide1.jpg';
import slide2 from '@/public/images/slide2.jpg';
import slide3 from '@/public/images/slide3.jpg';
import slide4 from '@/public/images/slide4.jpg';
import slide5 from '@/public/images/slide5.jpg';
import slide6 from '@/public/images/slide6.jpg';

function SlideShow() {
  return (
    <section className={` full-width ${styles.slideContainer}`}>
      <SlideUpperArrow className="full-width"
       />
      <div className={`full-width ${styles.overlay}`} />

      <div className={`full-width full-height ${styles.slide}`}>
        <Slide image={[slide6, slide5, slide4, slide3, slide2, slide1]} />
        <Slide image={[slide1, slide2, slide3, slide4, slide6, slide5]} reverse={true} />
        <Slide image={[slide3, slide5, slide1, slide3, slide6, slide4]} />
      </div>

      <div className={`full-width ${styles.overlay}`} />
      <SlideLowerArrow className="full-width" />
    </section>
  );
}

export default SlideShow;
