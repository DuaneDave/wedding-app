'use client';

import { useState, useEffect } from 'react';

import ClipBoard from '@/public/svg/clipboard';

function Copy({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <button
    style={{fontFamily: 'var(--font-bonny) !important'}}
    className='flex center' onClick={() => handleCopy(text)}>
      {!copied ? <ClipBoard /> : 'Copied'}
    </button>
  );
}

export default Copy;
