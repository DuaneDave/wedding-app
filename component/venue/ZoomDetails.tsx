import styles from './venue.module.css';

import ClipBoard from '@/public/svg/clipboard';
import Copy from '../ui/Copy';

function ZoomDetails() {
  return (
    <div className={`full-width ${styles.clipBoard}`}>
      <div className={`flex`}>
        <p className="flex flex-col">
          Zoom ID
          <span>556 454 9829</span>
        </p>

        <Copy text="556 454 9829" />
      </div>

      <div className={`flex`}>
        <p className="flex flex-col">
          Passcode
          <span>176593</span>
        </p>

        <Copy text="176593" />
      </div>
    </div>
  );
}

export default ZoomDetails;
