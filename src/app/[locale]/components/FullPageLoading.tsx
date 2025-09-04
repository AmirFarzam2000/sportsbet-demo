'use client';

import { useEffect, useState } from 'react';

interface FullPageLoadingProps {
  isLoading: boolean;
  onLoadingComplete?: () => void;
  minDuration?: number; // Minimum loading time in milliseconds
}

export default function FullPageLoading({
  isLoading,
  onLoadingComplete,
  minDuration = 4000,
}: FullPageLoadingProps) {
  const [showSpinner, setShowSpinner] = useState(true);
  const [progress, setProgress] = useState(0);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    if (!isLoading) {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDuration - elapsedTime);

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
          return prev + Math.random() * 4 + 1; // Progress between 1-5 (slower)
        });
      }, 150);

      // Ensure minimum loading time
      setTimeout(() => {
        if (progress < 100) {
          setProgress(100);
        }
      }, remainingTime);

      return () => clearInterval(interval);
    }
  }, [isLoading, onLoadingComplete, minDuration, startTime, progress]);

  if (!showSpinner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-yellow-500/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 border border-purple-500/20 rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-yellow-500/10 rounded-full animate-bounce"></div>

        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo/Brand */}
        <div className="mb-12">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            {/* Main logo circle */}
            <div className="w-full h-full bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-3xl font-bold text-white">SB</span>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wider">
            <span className="text-yellow-500">Sports</span>
            <span className="text-white">Bet</span>
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-blue-500 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Animated Loading Rings */}
        <div className="relative mb-12">
          <div className="w-32 h-32 mx-auto relative">
            {/* Outer ring */}
            <div className="absolute inset-0 border-4 border-gray-600 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-yellow-500 rounded-full animate-spin"></div>

            {/* Middle ring */}
            <div className="absolute inset-3 border-4 border-gray-500 rounded-full"></div>
            <div
              className="absolute inset-3 border-4 border-transparent border-r-blue-500 rounded-full animate-spin"
              style={{ animationDirection: 'reverse', animationDuration: '2s' }}
            ></div>

            {/* Inner ring */}
            <div className="absolute inset-6 border-4 border-gray-400 rounded-full"></div>
            <div
              className="absolute inset-6 border-4 border-transparent border-b-purple-500 rounded-full animate-spin"
              style={{ animationDuration: '1.5s' }}
            ></div>

            {/* Center */}
            <div className="absolute inset-9 bg-gradient-to-br from-yellow-500 to-blue-500 rounded-full animate-pulse shadow-lg"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs mx-auto mb-8">
          <div className="w-full bg-gray-700/50 rounded-full h-3 shadow-inner">
            <div
              className="bg-gradient-to-r from-yellow-500 via-orange-500 to-blue-500 h-3 rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-gray-400 text-sm mt-3 font-medium">
            {Math.round(progress)}% Complete
          </div>
        </div>

        {/* Loading Text with Typing Effect */}
        <div className="text-gray-300 text-lg font-medium mb-8">
          <span className="inline-block animate-bounce">P</span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '0.1s' }}
          >
            r
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '0.2s' }}
          >
            e
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '0.3s' }}
          >
            p
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '0.4s' }}
          >
            a
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '0.5s' }}
          >
            r
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '0.6s' }}
          >
            i
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '0.7s' }}
          >
            n
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '0.8s' }}
          >
            g
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '0.9s' }}
          >
            .
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '1s' }}
          >
            .
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: '1.1s' }}
          >
            .
          </span>
        </div>

        {/* Status Message */}
        <div className="text-gray-500 text-sm">
          Loading your betting experience...
        </div>

        {/* Additional floating elements */}
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
