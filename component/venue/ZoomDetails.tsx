'use client'

import {useState} from 'react'

import styles from './venue.module.css';

import ClipBoard from '@/public/svg/clipboard';

function ZoomDetails() {
  const [copied, setCopied] = useState(false)

  const handleCopy = (text : string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={`full-width ${styles.clipBoard}`}>
      <div className={`flex`}>
        <p className="flex flex-col">
          Zoom ID
          <span>12984721942231</span>
        </p>

        <button onClick={() => handleCopy('12984721942231')}>
          <ClipBoard />
        </button>
      </div>

      <div className={`flex`}>
        <p className="flex flex-col">
          Zoom ID
          <span>12984721942231</span>
        </p>

        <button onClick={() => handleCopy('12984721942231')}>
          <ClipBoard />
        </button>
      </div>
    </div>
  );
}

export default ZoomDetails;
