import React from 'react';
import Image from 'next/image';

import styles from './details.module.css';

import couples from '@/public/images/slide3.png';

import LgUnderline from '@/public/svg/lgUnderline';
import Download from './Download'
import Agenda from './Agenda';
import RightDesign from '@/public/svg/rightZigZag';
import LeftDesign from '@/public/svg/leftZigZag';


function Details() {
  return (
    <section className={styles.detailsMain}>
      <LeftDesign />
      <div className={`container grid ${styles.detailsContainer}`}>
        <div className={`${styles.leftSide}`}>
          <div className={styles.header}>
            <h2>The color of the day</h2>
            <LgUnderline />
          </div>

          <div className={` flex ${styles.colors}`}>
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>

          <h3>Take your pick from this Pantone palette</h3>

          <Image
            src={couples}
            className="full-width"
            alt="couples"
          />
        </div>

        <div className={`${styles.rightSide}`}>
          <div className={`grid center ${styles.action}`}>
            <p>Agenda of the day 🎉</p>

            <Download />
          </div>

          <Agenda />
        </div>
      </div>
      <RightDesign />
    </section>
  );
}

export default Details;
