'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './ui.module.css';

import CelebrationIcon from '@/public/svg/celebrationIcon';
import AlertBox from '@/public/svg/alertBox';
import CancelIcon from '@/public/svg/cancelIcon';

function Notification() {
  const [show, setShow] = useState(true);

  const now = new Date();
  const distance = new Date('2023-12-02').getTime() - now.getTime();

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className={styles.notification}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ scaleY: 0, x: '100%', opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5}}
        >
          <button onClick={() => setShow(!show)} className="flex align-y">
            <CancelIcon />
          </button>

          <AlertBox />
          <span className="flex align-y">
            <CelebrationIcon />
            <p>{days.toString()} days to go</p>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Notification;
