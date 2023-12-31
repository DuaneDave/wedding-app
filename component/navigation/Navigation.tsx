'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './navigation.module.css';

import Hamburger from '@/public/svg/hamburger';
import CancelIcon from '@/public/svg/cancelIcon';

function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]);

  return (
    <header className={`full-width ${scrolled ? styles.scrolled : ''}`}>
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
            Disclaimer: There will not be a reception after the event, but food
            and drinks will be available for all attendees.
          </p>
          <p className="full-width">
            Disclaimer: There will not be a reception after the event, but food
            and drinks will be available for all attendees.
          </p>
          <p className="full-width">
            Disclaimer: There will not be a reception after the event, but food
            and drinks will be available for all attendees.
          </p>
        </motion.span>
      </div>

      <nav>
        <div className={`flex container ${styles.navigation}`}>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 11 }}
          >
            <Link href="/">Jessy&Inyene</Link>
          </motion.span>

          <ul className="flex">
            <motion.li
              whileHover={{
                color: 'var(--dark-color)',
                borderBottom: '2px solid var(--dark-color)',
                transformOrigin: 'top left',
                scale: 1.1,
              }}
            >
              <Link
                className={pathname === '/venue' ? styles.active : ''}
                href="/venue"
              >
                The Venue
              </Link>
            </motion.li>
            <motion.li
              whileHover={{
                color: 'var(--dark-color)',
                borderBottom: '2px solid var(--dark-color)',
                transformOrigin: 'top left',
                scale: 1.1,
              }}
            >
              <Link
                className={pathname === '/gallery' ? styles.active : ''}
                href="/gallery"
              >
                Gallery
              </Link>
            </motion.li>

            <motion.li
              whileHover={{
                color: 'var(--dark-color)',
                borderBottom: '2px solid var(--dark-color)',
                transformOrigin: 'top left',
                scale: 1.1,
              }}
            >
              <Link
                className={pathname === '/qna' ? styles.active : ''}
                href="/qna"
              >
                Q&A
              </Link>
            </motion.li>

            <motion.li
              whileHover={{
                color: 'var(--dark-color)',
                borderBottom: '2px solid var(--dark-color)',
                transformOrigin: 'top left',
                scale: 1.1,
              }}
            >
              <Link
                className={pathname === '/gift' ? styles.active : ''}
                href="/gift"
              >
                Gift
              </Link>
            </motion.li>
          </ul>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div className={`full-width ${styles.backdrop}`}>
                <motion.ul
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.2 }}
                  exit={{ opacity: 0, y: -30 }}
                  className={`flex ${styles.mobileMenu}`}
                >
                  <motion.li>
                    <Link
                      className={pathname === '/venue' ? styles.active : ''}
                      onClick={() => setOpen(!open)}
                      href="/venue"
                    >
                      The Venue
                    </Link>
                  </motion.li>

                  <motion.li>
                    <Link
                      className={pathname === '/gallery' ? styles.active : ''}
                      onClick={() => setOpen(!open)}
                      href="/gallery"
                    >
                      Gallery
                    </Link>
                  </motion.li>

                  <motion.li>
                    <Link
                      className={pathname === '/qna' ? styles.active : ''}
                      onClick={() => setOpen(!open)}
                      href="/qna"
                    >
                      Q&A
                    </Link>
                  </motion.li>
                  <motion.li>
                    <Link
                      className={pathname === '/gift' ? styles.active : ''}
                      onClick={() => setOpen(!open)}
                      href="/gift"
                    >
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
