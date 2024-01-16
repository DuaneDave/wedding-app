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

        <Copy text="222 000 0000" />
      </div>

      <div className={`flex`}>
        <p className="flex flex-col">
          Passcode
          <span>1765433</span>
        </p>

        <Copy text="006793" />
      </div>
    </div>
  );
}

export default ZoomDetails;
