import React from 'react';
import Image from 'next/image';

import husband from '@/public/images/husband.png';
import wife from '@/public/images/wife.png';
import Date from './Date';

import styles from './homepage.module.css';

function HeroSection() {
  return (
    <section className={`ful-width ${styles.mainContainer}`}>
      <div
        className={`flex full-height full-width container center ${styles.heroContainer}`}
      >
        <Date className={styles.mainDate} />

        <div
          className={`flex flex-col center full-height full-width ${styles.content}`}
        >
          <h1>Yes! we are getting married</h1>

          <div className={`flex center  ${styles.imageContainer}`}>
            <div>
              <Image src={wife} alt="wife" />
              <p>He asked💍</p>
            </div>

            <div className='flex flex-col'>
              <Image src={husband} alt="husband" />
              <p>☺️She said Ye</p>

              <Date className={styles.subDate} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
