'use client';

import { useEffect, useState } from 'react';

interface LoadingSpinnerProps {
  isLoading: boolean;
  onLoadingComplete?: () => void;
}

export default function LoadingSpinner({
  isLoading,
  onLoadingComplete,
}: LoadingSpinnerProps) {
  const [showSpinner, setShowSpinner] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setShowSpinner(false);
              onLoadingComplete?.();
            }, 500);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isLoading, onLoadingComplete]);

  if (!showSpinner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo/Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
            <span className="text-yellow-500">Sports</span>
            <span className="text-white">Bet</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Animated Spinner */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-yellow-500 rounded-full animate-spin"></div>

            {/* Inner Ring */}
            <div className="absolute inset-2 border-4 border-gray-600 rounded-full"></div>
            <div
              className="absolute inset-2 border-4 border-transparent border-b-blue-500 rounded-full animate-spin"
              style={{
                animationDirection: 'reverse',
                animationDuration: '1.5s',
              }}
            ></div>

            {/* Center Dot */}
            <div className="absolute inset-4 bg-gradient-to-br from-yellow-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-yellow-500 to-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-gray-400 text-sm mt-2">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-gray-400 text-lg">
          <span className="inline-block animate-bounce">L</span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '0.1s' }}
          >
            o
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '0.2s' }}
          >
            a
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '0.3s' }}
          >
            d
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '0.4s' }}
          >
            i
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '0.5s' }}
          >
            n
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '0.6s' }}
          >
            g
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '0.7s' }}
          >
            .
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '0.8s' }}
          >
            .
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '0.9s' }}
          >
            .
          </span>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-500 rounded-full animate-ping"></div>
          <div
            className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping"
            style={{ animationDelay: '0.5s' }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-ping"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-yellow-500 rounded-full animate-ping"
            style={{ animationDelay: '1.5s' }}
          ></div>
        </div>
      </div>
    </div>
  );
}
