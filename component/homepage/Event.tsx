import React from 'react';

import styles from './homepage.module.css';

import Underline from '@/public/svg/underline';
import Date from './Date';
import Arrows from '../ui/Arrows';

function Event() {
  return (
    <section>
      <div className={`container full-width ${styles.eventContainer}`}>
        <div className={` flex flex-col ${styles.event}`}>
          <div className={`flex flex-col ${styles.details}`}>
            <div>
              <div className={styles.headers}>
                <h2>The Date</h2>
                <Underline />
              </div>

              <p className={styles.eventText}>
                Saturday, <br /> June 23rd 2023
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
                The Dorchester <br /> Event Center
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;
