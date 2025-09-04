'use client';

interface ButtonLoadingProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
}

export default function ButtonLoading({
  size = 'sm',
  color = 'white',
}: ButtonLoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const colorClasses = {
    primary: 'border-yellow-500',
    secondary: 'border-blue-500',
    white: 'border-white',
  };

  return (
    <div className={`${sizeClasses[size]} animate-spin`}>
      <div
        className={`w-full h-full border-2 border-gray-300 border-t-${colorClasses[color]} rounded-full`}
      ></div>
    </div>
  );
}
