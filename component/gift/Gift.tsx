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
          Having you present at our wedding is the most meaningful gift we could receive. If you would like to honor us with a gift, we kindly request for no boxed gifts. If you wish to give us something, please feel free to contact us using the provided contact information.
        </p>

        <div className={`full-width ${styles.contacts}`}>
          <div className="full-width">
            <p> Get in touch: </p>
          </div>

          <div className={`grid center ${styles.details}`}>
            <div className='flex align-y'>
              <span>
                {/* <h2>Jackie Brown</h2> */}
                <p>+2348035464923</p>
              </span>

              <Copy text="081027839134" />
            </div>
            <div className='flex align-y'>
              <span>
                {/* <h2>Jackie Brown</h2> */}
                <p>+447739756701</p>
              </span>

              <Copy text="081027839134" />
            </div>
            <div className='flex align-y'>
              <span>
                {/* <h2>Jackie Brown</h2> */}
                <p>+447425192711</p>
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
