'use client'

import {motion} from 'framer-motion'
import {useRouter} from 'next/navigation'

import styles from './venue.module.css';

import BackArrow from '@/public/svg/backArrow';
import CancelIcon from '@/public/svg/cancelIcon';

function Header({ location, setLocation }: { location: string, setLocation: (newLocation: string) => void }) {
  const router = useRouter();

  return (
    <header className={`full-width ${styles.header}`}>
      <div className={`flex align-y ${styles.headerActions}`}>
        <span className={`flex align-y`}>
          <button onClick={() => { location === '' ? router.push('/') : setLocation('') }} className='flex center'>
            <BackArrow />
          </button>

          <p>The venue for our wedding</p>
        </span>

        <button onClick={() => router.push('/')}>
          <CancelIcon />
        </button>
      </div>

      <div>
        <motion.span
        initial={{ width: 0 }}
          animate={{
            width: location === 'zoom' || location === 'in-person' ? '100%' : '40%',
          }}
        className="full-height" />
      </div>
    </header>
  );
}

export default Header;
