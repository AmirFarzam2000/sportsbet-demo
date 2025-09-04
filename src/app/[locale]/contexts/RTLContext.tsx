'use client';

import React, { createContext, useContext, ReactNode } from 'react';

interface RTLContextType {
  isRTL: boolean;
  direction: 'ltr' | 'rtl';
}

const RTLContext = createContext<RTLContextType>({
  isRTL: false,
  direction: 'ltr',
});

export const useRTL = () => useContext(RTLContext);

interface RTLProviderProps {
  children: ReactNode;
  locale: string;
}

export const RTLProvider: React.FC<RTLProviderProps> = ({
  children,
  locale,
}) => {
  const isRTL = locale === 'fa';
  const direction = isRTL ? 'rtl' : 'ltr';

  return (
    <RTLContext.Provider value={{ isRTL, direction }}>
      <div dir={direction} className={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </RTLContext.Provider>
  );
};
