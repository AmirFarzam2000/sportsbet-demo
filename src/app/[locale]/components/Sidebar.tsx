// components/Sidebar.tsx
'use client';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';
import { useRTL } from '../contexts/RTLContext';
import { NavigationItem } from '@/types';

interface SidebarItem extends NavigationItem {
  key: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  title: string;
  items: SidebarItem[];
  activeItem?: string;
}

export default function Sidebar({ items, activeItem }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { isRTL } = useRTL();

  const getTranslatedLabel = (key: string) => {
    return t(key.toLowerCase());
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className={`lg:hidden fixed top-20 z-50 p-3 text-gray-700 dark:text-white bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg theme-transition ${
          isRTL ? 'right-4' : 'left-4'
        }`}
        onClick={() => setOpen(!open)}
      >
        {open ? '✖' : '☰'}
      </button>

      {/* Sidebar */}
      <aside
        suppressHydrationWarning
        className={twMerge(
          `fixed top-0 h-full w-64 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white transition-transform z-40 theme-transition ${
            isRTL
              ? 'right-0 border-l border-gray-200 dark:border-[#333]'
              : 'left-0 border-r border-gray-200 dark:border-[#333]'
          }`,
          open
            ? 'translate-x-0'
            : isRTL
              ? 'translate-x-full'
              : '-translate-x-full',
          'lg:translate-x-0 lg:static lg:block'
        )}
      >
        <div
          className={`p-6 border-b border-gray-200 dark:border-[#333] ${isRTL ? 'text-right' : 'text-left'}`}
        >
          <h2
            className={`font-bold text-xl text-yellow-500 ${
              isRTL ? 'text-right' : 'text-left'
            }`}
          >
            {t('topSports')}
          </h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.key}>
                <button
                  className={twMerge(
                    `w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isRTL
                        ? 'flex-row-reverse text-right'
                        : 'flex-row text-left'
                    }`,
                    activeItem === item.key
                      ? 'bg-yellow-500 text-black font-semibold shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a2a2a] hover:text-gray-900 dark:hover:text-white'
                  )}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span
                    className={`font-medium ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}
                  >
                    {getTranslatedLabel(item.key)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Stats */}
        <div
          className={`p-4 border-t border-gray-200 dark:border-[#333] mt-auto ${
            isRTL ? 'text-right' : 'text-left'
          }`}
        >
          <div className="bg-gray-100 dark:bg-[#2a2a2a] rounded-lg p-4">
            <h3
              className={`text-gray-900 dark:text-white font-semibold mb-3 ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              {t('liveMatches')}
            </h3>
            <div className="space-y-2">
              <div
                className={`flex justify-between text-sm ${
                  isRTL ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <span className="text-gray-600 dark:text-gray-400">
                  {t('football')}
                </span>
                <span className="text-red-500 font-semibold">3</span>
              </div>
              <div
                className={`flex justify-between text-sm ${
                  isRTL ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <span className="text-gray-600 dark:text-gray-400">
                  {t('tennis')}
                </span>
                <span className="text-red-500 font-semibold">1</span>
              </div>
              <div
                className={`flex justify-between text-sm ${
                  isRTL ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <span className="text-gray-600 dark:text-gray-400">
                  {t('basketball')}
                </span>
                <span className="text-red-500 font-semibold">0</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
