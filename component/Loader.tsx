'use client';

import Image from 'next/image';
import styles from './loader.module.css';
import { motion } from 'framer-motion';

import greetingText from '../public/images/greetingText.png';
import logo from '../public/images/logo.png';

export default function Loader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ delay: 9, duration: 1 }}
      className={`full-width full-height ${styles.loaderContainer}`}
    >
      <motion.div
        className={`flex center ${styles.overlay}`}
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Image src={logo} alt="logo" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: '100vh', opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5, ease: 'easeIn' }}
        className={styles.overlay2}
      >
        <motion.div
          className="flex"
          initial={{ x: '-200%' }}
          animate={{ x: '0' }}
          transition={{
            delay: 4,
            duration: 1.2,
            type: 'spring',
            repeat: 1,
            repeatType: 'mirror',
            repeatDelay: 1,
          }}
        >
          <Image
            className="full-width"
            src={greetingText}
            alt="greeting text"
          />
          <Image
            className="full-width"
            src={greetingText}
            alt="greeting text"
          />
          <Image
            className="full-width"
            src={greetingText}
            alt="greeting text"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
