'use client';

interface CardLoadingProps {
  type?: 'card' | 'list' | 'stats';
  count?: number;
}

export default function CardLoading({
  type = 'card',
  count = 1,
}: CardLoadingProps) {
  const renderCardSkeleton = () => (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 animate-pulse theme-transition">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
      </div>
    </div>
  );

  const renderListSkeleton = () => (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 animate-pulse theme-transition"
        >
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
            </div>
            <div className="w-20 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderStatsSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 animate-pulse theme-transition"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-16 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
          </div>
        </div>
      ))}
    </div>
  );

  switch (type) {
    case 'card':
      return (
        <div className="space-y-4">
          {Array.from({ length: count }).map((_, index) => (
            <div key={index}>{renderCardSkeleton()}</div>
          ))}
        </div>
      );
    case 'list':
      return renderListSkeleton();
    case 'stats':
      return renderStatsSkeleton();
    default:
      return renderCardSkeleton();
  }
}
