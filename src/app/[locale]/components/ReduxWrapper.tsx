'use client';

import { ReactNode, useEffect, useState } from 'react';

interface ReduxWrapperProps {
  children: ReactNode;
}

export default function ReduxWrapper({ children }: ReduxWrapperProps) {
  const [isStoreReady, setIsStoreReady] = useState(false);

  useEffect(() => {
    // Wait a bit for the store to be ready
    const timer = setTimeout(() => {
      setIsStoreReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isStoreReady) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="w-8 h-8 border-4 border-gray-600 border-t-yellow-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return <>{children}</>;
}
