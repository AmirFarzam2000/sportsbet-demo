'use client';
import React from 'react';

interface LiveIndicatorProps {
  isLive: boolean;
  score?: number;
  time?: string;
}

export default function LiveIndicator({
  isLive,
  score,
  time,
}: LiveIndicatorProps) {
  if (!isLive) {
    return (
      <div className="text-gray-600 dark:text-gray-400 text-xs text-center">
        {time}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <span className="text-red-500 text-xs font-semibold">LIVE</span>
      </div>
      {score !== undefined && (
        <div className="text-red-500 text-xs font-bold">{score}</div>
      )}
      {time && (
        <div className="text-gray-600 dark:text-gray-400 text-xs">{time}</div>
      )}
    </div>
  );
}
