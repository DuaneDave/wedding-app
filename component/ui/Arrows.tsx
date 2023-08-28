'use client';

import React from 'react';
import { motion } from 'framer-motion';

import useWindowSize from '@/hooks/useWindowSize';
import MobileArrow from '@/public/svg/mobileArrow';
import DesktopArrow from '@/public/svg/desktopArrow';

function Arrows() {
  const { width } = useWindowSize();

  return (
    <>
      {width && width < 768 && (
        <motion.span>
          <MobileArrow />
        </motion.span>
      )}

      {width && width >= 768 && (
        <motion.span>
          <DesktopArrow />
        </motion.span>
      )}
    </>
  );
}

export default Arrows;
