'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import styles from './details.module.css';

import useWindowSize from '@/hooks/useWindowSize';
import DownloadIcon from '@/public/svg/downloadIcon';

function Download() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width && width < 768) setIsVisible(true);
  }, [width]);

  return (
    <motion.button
      transition={{ duration: 0.5 }}
      onMouseEnter={() => width && width > 768 && setIsVisible(!isVisible)}
      onMouseLeave={() => width && width > 768 && setIsVisible(!isVisible)}
      className={`flex align-y ${styles.button}`}
    >
      <DownloadIcon />

      {isVisible && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href="/file/Welcome.pdf" target="_blank" download={'Welcome.pdf'}>
            Download Program
          </a>
        </motion.span>
      )}
    </motion.button>
  );
}

export default Download;
