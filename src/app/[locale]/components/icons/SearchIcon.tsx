import React from 'react';

interface SearchIconProps {
  size?: number;
  className?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({
  size = 20,
  className = '',
}) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};

export default SearchIcon;
