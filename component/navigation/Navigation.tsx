'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './navigation.module.css';

import Hamburger from '@/public/svg/hamburger';
import CancelIcon from '@/public/svg/cancelIcon';

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className={`flex center ${styles.notice}`}>
        <motion.span
          animate={{
            x: '-100%',
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'linear',
          }}
          className="full-width"
        >
          <p className="full-width">
            Disclaimer: Please note that the wedding is an invitation-only
            event. If you have not received an invitation, we kindly request
            that you do not attend.
          </p>
          <p className="full-width">
            Disclaimer: Please note that the wedding is an invitation-only
            event. If you have not received an invitation, we kindly request
            that you do not attend.
          </p>
        </motion.span>
      </div>

      <nav>
        <div className={`flex container ${styles.navigation}`}>
          <Link href="/">Jessy&Inyene</Link>

          <ul className="flex">
            <motion.li
              whileHover={{
                color: 'var(--dark-color)',
                textDecoration: 'underline',
                transformOrigin: 'top left',
                scale: 1.1,
              }}
            >
              <Link href="/rsvp">RSVP</Link>
            </motion.li>
            <motion.li
              whileHover={{
                color: 'var(--dark-color)',
                textDecoration: 'underline',
                transformOrigin: 'top left',
                scale: 1.1,
              }}
            >
              <Link href="/program">Our Program</Link>
            </motion.li>
            <motion.li
              whileHover={{
                color: 'var(--dark-color)',
                textDecoration: 'underline',
                transformOrigin: 'top left',
                scale: 1.1,
              }}
            >
              <Link href="/gift">Gift</Link>
            </motion.li>
          </ul>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                className={` full-width full-height ${styles.backdrop}`}
              >
                <motion.ul
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  exit={{ opacity: 0, y: -30 }}
                  className={`flex ${styles.mobileMenu}`}
                >
                  <motion.li>
                    <Link onClick={() => setOpen(!open)} href="/rsvp">
                      RSVP
                    </Link>
                  </motion.li>
                  <motion.li>
                    <Link onClick={() => setOpen(!open)} href="/program">
                      Our Program
                    </Link>
                  </motion.li>
                  <motion.li>
                    <Link onClick={() => setOpen(!open)} href="/gift">
                      Gift
                    </Link>
                  </motion.li>

                  <li tabIndex={2} onClick={() => setOpen(!open)}>
                    <CancelIcon />
                  </li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>

          <button onClick={() => setOpen(!open)}>
            <Hamburger />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
