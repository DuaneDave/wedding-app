'use client';

import { useState } from 'react';
import Image from 'next/image';

import styles from './venue.module.css';

import Header from './Header';

import zoomIcon from '@/public/images/zoom.png';
import person from '@/public/images/person.png';
import ZoomDetails from './ZoomDetails';
import LocationDetails from './LocationDetails';

function Venue() {
  const [location, setLocation] = useState<string>('');

  return (
    <section>
      <div className={`container ${styles.venueContent}`}>
        <Header location={location} setLocation={setLocation} />

        <h2>Jessy & Inyene's Wedding</h2>
        <p>Will you be joining us in person or virtually for the wedding @11am?</p>

        {location === '' && (
          <div className={`flex ${styles.attend}`}>
            <button onClick={() => setLocation('zoom')} className='full-width'>
              <Image
                src={zoomIcon}
                className="full-width full-height"
                alt="Join in zoom"
              />

              <span className="full-width flex center">
                <p>I will join in zoom</p>
              </span>
            </button>

            <button onClick={() => setLocation('in-person')} className='full-width'>
              <Image
                src={person}
                className="full-width full-height"
                alt="Join in person"
              />

              <span className="full-width flex center">
                <p>I will come in person</p>
              </span>
            </button>
          </div>
        )}

        {location === 'zoom' && <ZoomDetails />}
        {location === 'in-person' && <LocationDetails />}
      </div>
    </section>
  );
}

export default Venue;
