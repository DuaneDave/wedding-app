

import styles from './venue.module.css';

import ClipBoard from '@/public/svg/clipboard';

function ZoomDetails() {

  return (
    <div className={`full-width ${styles.clipBoard}`}>
      <div className={`flex`}>
        <p className="flex flex-col">
          Zoom ID
          <span>12984721942231</span>
        </p>

        <button>
          <ClipBoard />
        </button>
      </div>

      <div className={`flex`}>
        <p className="flex flex-col">
          Zoom ID
          <span>12984721942231</span>
        </p>

        <button>
          <ClipBoard />
        </button>
      </div>
    </div>
  );
}

export default ZoomDetails;
