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
import slide7 from '@/public/images/slide7.jpg';
import slide8 from '@/public/images/slide8.jpg';
import slide9 from '@/public/images/slide9.jpg';
import slide10 from '@/public/images/slide10.jpg';
import slide12 from '@/public/images/slide12.jpg';
import slide13 from '@/public/images/slide13.jpg';
import slide14 from '@/public/images/slide14.jpg';
import slide15 from '@/public/images/slide15.jpg';
import slide16 from '@/public/images/slide16.jpg';

function SlideShow() {
  return (
    <section className={` full-width ${styles.slideContainer}`}>
      <SlideUpperArrow className="full-width" />
      <div className={`full-width ${styles.overlay}`} />

      <div className={`full-width full-height ${styles.slide}`}>
        <Slide image={[slide7, slide8, slide9, slide10, slide11, slide12]} />
        <Slide
          image={[slide1, slide2, slide3, slide4, slide6, slide5]}
          reverse={true}
        />
        <Slide image={[slide13, slide14, slide15, slide16, slide10, slide1]} />
      </div>

      <div className={`full-width ${styles.overlay}`} />
      <SlideLowerArrow className="full-width" />
    </section>
  );
}

export default SlideShow;
