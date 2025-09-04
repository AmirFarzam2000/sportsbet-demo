import React from 'react';

interface MoonIconProps {
  size?: number;
  className?: string;
}

const MoonIcon: React.FC<MoonIconProps> = ({ size = 24, className = '' }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
};

export default MoonIcon;
