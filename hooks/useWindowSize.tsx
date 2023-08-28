'use client';

import { useEffect, useState } from 'react';

type props = {
  width: number | null;
  height: number | null;
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<props>({
    width: null,
    height: null,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
}

export default useWindowSize;
