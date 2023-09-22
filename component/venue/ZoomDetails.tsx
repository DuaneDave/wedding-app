import styles from './venue.module.css';

import ClipBoard from '@/public/svg/clipboard';
import Copy from '../ui/Copy';

function ZoomDetails() {
  return (
    <div className={`full-width ${styles.clipBoard}`}>
      <div className={`flex`}>
        <p className="flex flex-col">
          Zoom ID
          <span>Check back on 29/11/2023</span>
        </p>

        <Copy text="12984721942231" />
      </div>

      <div className={`flex`}>
        <p className="flex flex-col">
          Password
          <span>Check back on 29/11/2023</span>
        </p>

        <Copy text="12984721942231" />
      </div>
    </div>
  );
}

export default ZoomDetails;
