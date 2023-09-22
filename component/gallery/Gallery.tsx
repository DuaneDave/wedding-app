'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { StaticImageData } from 'next/image';

import styles from './gallery.module.css';

import RightDesign from '@/public/svg/rightZigZag';
import LeftDesign from '@/public/svg/leftZigZag';
import gallery from '@/utils/data/gallery';

import Modal from './Modal';

type imageState = {
  img: StaticImageData;
  id: string;
};

function Gallery() {
  const [activeImage, setActiveImage] = useState<imageState | null>(null);

  useEffect(() => {
    if (activeImage) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [activeImage]);

  return (
    <section className={`section-styled ${styles.gallery}`}>
      <LeftDesign />

      <div className={`container ${styles.galleryContainer}`}>
        {gallery.map((img) => (
          <motion.div
            className={styles.image}
            key={img.title}
            layoutId={img.title}
            transition={{ duration: 1, type: 'spring', damping: 14 }}
          >
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              transition={{ duration: 1, type: 'spring', damping: 10 }}
            >
              <Image
                onClick={() => setActiveImage({ img: img.url, id: img.title })}
                src={img.url}
                alt={img.title}
                placeholder="blur"
                className="full-width full-height"
              />
            </motion.div>
          </motion.div>
        ))}

        {activeImage && <Modal img={activeImage} onClose={setActiveImage} />}
      </div>

      <RightDesign />
    </section>
  );
}

export default Gallery;
