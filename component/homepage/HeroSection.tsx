'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
          <motion.h1
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.2,
              delay: 14,
            }}
          >
            Yes! we are getting married
          </motion.h1>

          <div className={`flex center  ${styles.imageContainer}`}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 12 }}
            >
              <Image src={wife} alt="wife" />
              <p>He asked💍</p>
            </motion.div>

            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 12.5 }}
            >
              <Image src={husband} alt="husband" />
              <p>☺️She said Ye</p>

              <Date className={styles.subDate} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
