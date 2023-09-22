'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { StaticImageData } from 'next/image';

import styles from './gallery.module.css';

type ModalProps = {
  img: { img: StaticImageData; id: string };
  onClose: (state: { img: StaticImageData; id: string } | null) => void;
};

function Modal({ img, onClose }: ModalProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        onClick={() => onClose(null)}
        className={`full-width ${styles.backdrop}`}
      />

      <div className={styles.modal} onClick={() => onClose(null)}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', damping: 15 }}
          layoutId={img.id}
        >
          <Image placeholder="blur" src={img.img} alt="husband" />
        </motion.div>
      </div>
    </>
  );
}

export default Modal;
