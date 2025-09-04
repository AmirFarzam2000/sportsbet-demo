'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

interface LoadingContextType {
  isInitialLoading: boolean;
  setIsInitialLoading: (_loading: boolean) => void;
  hasLoadedBefore: boolean;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [hasLoadedBefore, setHasLoadedBefore] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Check if this is the first time loading the app
    const hasLoaded = sessionStorage.getItem('app-has-loaded');

    if (hasLoaded) {
      // App has loaded before - don't show loading screen
      setHasLoadedBefore(true);
      setIsInitialLoading(false);
    } else {
      // First time loading - show loading screen
      const timer = setTimeout(() => {
        setIsInitialLoading(false);
        setHasLoadedBefore(true);
        sessionStorage.setItem('app-has-loaded', 'true');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isClient]);

  return (
    <LoadingContext.Provider
      value={{ isInitialLoading, setIsInitialLoading, hasLoadedBefore }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}
