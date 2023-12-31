import React from 'react';

import styles from './homepage.module.css';

import Underline from '@/public/svg/underline';
import Date from './Date';
import Arrows from '../ui/Arrows';

function Event() {
  return (
    <section className={styles.eventContainer}>
      <div className={`container full-width ${styles.eventContainer}`}>
        <div className={` flex flex-col ${styles.event}`}>
          <div className={`flex flex-col ${styles.details}`}>
            <div>
              <div className={styles.headers}>
                <h2>The Date</h2>
                <Underline />
              </div>

              <p className={styles.eventText}>
                Saturday, <br /> December 2nd 2023 @11am <br /> Gmt+1.
              </p>
            </div>
            <Date />
          </div>

          <div className={`flex ${styles.details}`}>
            <Arrows />
            <div>
              <div className={styles.headers}>
                <h2>The Venue</h2>
                <Underline />
              </div>

              <p className={styles.eventText}>
                38 Oshindehin <br /> street, off.  Akilo, <br /> Ikeja, Lagos State.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;
