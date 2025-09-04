'use client';
import React from 'react';
import { useRTL } from '../contexts/RTLContext';

interface RTLWrapperProps {
  children: React.ReactNode;
}

export default function RTLWrapper({ children }: RTLWrapperProps) {
  const { isRTL } = useRTL();

  return (
    <div
      suppressHydrationWarning
      className={`min-h-screen flex flex-col bg-[#141414] w-full ${
        isRTL ? 'rtl' : 'ltr'
      }`}
    >
      {children}
    </div>
  );
}
