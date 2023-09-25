import React from 'react';

import styles from './homepage.module.css';

function Date({ className }: { className?: string }) {
  return (
    <span className={`flex flex-col ${styles.date} ${className}`}>
      <p>12</p>
      <p>/</p>
      <p>23</p>
    </span>
  );
}

export default Date;
