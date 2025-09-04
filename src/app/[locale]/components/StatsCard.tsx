'use client';
import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color: 'green' | 'blue' | 'yellow' | 'purple';
}

export default function StatsCard({
  title,
  value,
  icon,
  trend,
  color,
}: StatsCardProps) {
  const getColorClasses = () => {
    switch (color) {
      case 'green':
        return 'from-green-500 to-green-600';
      case 'blue':
        return 'from-blue-500 to-blue-600';
      case 'yellow':
        return 'from-yellow-500 to-yellow-600';
      case 'purple':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333] hover:border-[#555] transition-all duration-200 hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div
          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getColorClasses()} flex items-center justify-center text-2xl`}
        >
          {icon}
        </div>
        {trend && (
          <div
            className={`text-sm font-medium ${trend.isPositive ? 'text-green-400' : 'text-red-400'}`}
          >
            {trend.isPositive ? '+' : ''}
            {trend.value}%
          </div>
        )}
      </div>

      <h3 className="text-gray-400 text-sm font-medium mb-2">{title}</h3>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}
