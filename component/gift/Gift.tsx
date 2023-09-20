import React from 'react';

import styles from './gift.module.css';

import RightDesign from '@/public/svg/rightZigZag';
import LeftDesign from '@/public/svg/leftZigZag';

import Copy from '../ui/Copy';

function Gift() {
  return (
    <section className='section-styled'>
      <LeftDesign />
      
      <div className={`container  ${styles.giftContainer}`}>
        <h1>Gifts & Contribution</h1>
        <p>
          Your presence at our wedding is the greatest gift we could ask for. If
          you would like to honor us with a gift, we appreciate your
          thoughtfulness.
        </p>

        <div className={`full-width ${styles.contacts}`}>
          <div className="full-width">
            <p>Reach Out to them to get bank details</p>
          </div>

          <div className={`grid center ${styles.details}`}>
            <div className='flex align-y'>
              <span>
                <h2>Jackie Brown</h2>
                <p>081027839134</p>
              </span>

              <Copy text="081027839134" />
            </div>
            <div className='flex align-y'>
              <span>
                <h2>Jackie Brown</h2>
                <p>081027839134</p>
              </span>

              <Copy text="081027839134" />
            </div>
            <div className='flex align-y'>
              <span>
                <h2>Jackie Brown</h2>
                <p>081027839134</p>
              </span>

              <Copy text="081027839134" />
            </div>
          </div>
        </div>
      </div>

      <RightDesign />
    </section>
  );
}

export default Gift;
