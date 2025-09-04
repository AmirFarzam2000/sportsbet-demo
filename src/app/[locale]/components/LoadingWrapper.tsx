'use client';

import { ReactNode } from 'react';
import { useLoading } from '../contexts/LoadingContext';
import FullPageLoading from './FullPageLoading';

interface LoadingWrapperProps {
  children: ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const { isInitialLoading } = useLoading();

  if (isInitialLoading) {
    return <FullPageLoading isLoading={isInitialLoading} />;
  }

  return <>{children}</>;
}
