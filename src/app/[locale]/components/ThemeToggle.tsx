'use client';

import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from './icons';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  size = 'md',
}) => {
  const { theme, toggleTheme } = useTheme();

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        ${sizeClasses[size]}
        ${className}
        relative overflow-hidden
        bg-gray-200 dark:bg-[#2a2a2a]
        hover:bg-gray-300 dark:hover:bg-[#3a3a3a]
        text-gray-700 dark:text-gray-200
        rounded-lg
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800
        group
      `}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Sun Icon - Show when in Dark Mode */}
      <div
        className={`
          ${iconSizes[size]}
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          transition-all duration-300 ease-in-out
          ${
            theme === 'dark'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 rotate-90 scale-75'
          }
        `}
      >
        <SunIcon size={24} className="w-full h-full" />
      </div>

      {/* Moon Icon - Show when in Light Mode */}
      <div
        className={`
          ${iconSizes[size]}
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          transition-all duration-300 ease-in-out
          ${
            theme === 'light'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-75'
          }
        `}
      >
        <MoonIcon size={24} className="w-full h-full" />
      </div>

      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-lg bg-yellow-400 opacity-0 group-active:opacity-20 transition-opacity duration-150" />
    </button>
  );
};

export default ThemeToggle;
