import styles from './venue.module.css';

import ClipBoard from '@/public/svg/clipboard';
import Copy from '../ui/Copy';

function ZoomDetails() {
  return (
    <div className={`full-width ${styles.clipBoard}`}>
      <div className={`flex`}>
        <p className="flex flex-col">
          Zoom ID
          <span>12984721942231</span>
        </p>

        <Copy text="12984721942231" />
      </div>

      <div className={`flex`}>
        <p className="flex flex-col">
          Zoom ID
          <span>12984721942231</span>
        </p>

        <Copy text="12984721942231" />
      </div>
    </div>
  );
}

export default ZoomDetails;
