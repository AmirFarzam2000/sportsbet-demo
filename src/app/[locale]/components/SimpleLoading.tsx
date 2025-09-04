'use client';

interface SimpleLoadingProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
}

export default function SimpleLoading({
  size = 'md',
  color = 'primary',
}: SimpleLoadingProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const colorClasses = {
    primary: 'border-yellow-500',
    secondary: 'border-blue-500',
    white: 'border-white',
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div
          className={`w-full h-full border-4 border-gray-300 dark:border-gray-200 border-t-${colorClasses[color]} rounded-full`}
        ></div>
      </div>
    </div>
  );
}
