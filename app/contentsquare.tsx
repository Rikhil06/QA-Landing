'use client';
import { useEffect } from 'react';
import { injectContentsquareScript } from '@contentsquare/tag-sdk';

export function Contentsquare() {
  useEffect(() => {
    injectContentsquareScript({ clientId: '016e34d707dae' });
  }, []);
  return null;
}
