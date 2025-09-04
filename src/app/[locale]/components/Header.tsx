'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRTL } from '../contexts/RTLContext';
import ThemeToggle from './ThemeToggle';
import { SearchIcon } from './icons';
import { HeaderProps, SupportedLocale } from '@/types';

const Header: React.FC<HeaderProps> = ({ locale: _locale }) => {
  const { t, i18n } = useTranslation();
  const { isRTL } = useRTL();
  const pathname = usePathname();
  const currentLocal = (pathname.split('/')[1] as SupportedLocale) || 'en';
  const switchLocale: SupportedLocale = currentLocal === 'en' ? 'fa' : 'en';
  const newPath = pathname.replace(`/${currentLocal}`, `/${switchLocale}`);

  return (
    <header className="w-full bg-gradient-to-r from-white to-gray-100 dark:from-[#0a0a0a] dark:to-[#1a1a1a] text-gray-900 dark:text-white border-b border-gray-200 dark:border-[#333] sticky top-0 z-50 theme-transition">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div
          className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} justify-between items-center`}
        >
          {/* Logo and Navigation - Right Side in RTL */}
          <div
            className={`flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <Link href={`/${currentLocal}`} className="flex items-center gap-3">
              <Image
                alt="Bwin Logo"
                src="/images/Logo_Bwin.svg.png"
                width={80}
                height={44}
                className="w-[80px] h-auto"
              />
              <span
                className={`hidden md:block text-2xl font-bold text-yellow-500 ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                SportsBet
              </span>
            </Link>

            <nav
              className={`hidden lg:flex gap-8 text-gray-600 dark:text-[#adadad] text-base ${
                isRTL ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <Link
                href="#"
                className={`hover:text-yellow-400 transition-colors duration-200 font-medium ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                {t('header')}
              </Link>
              <Link
                href="#"
                className={`hover:text-yellow-400 transition-colors duration-200 font-medium ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                {t('Sports')}
              </Link>
              <Link
                href="#"
                className={`hover:text-yellow-400 transition-colors duration-200 font-medium ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                {t('Live')}
              </Link>
            </nav>
          </div>

          {/* Left Side in RTL - Search, Language, Login */}
          <div
            className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
          >
            {/* Search */}
            <div className="hidden md:flex relative">
              <input
                type="text"
                placeholder={isRTL ? 'جستجوی مسابقات...' : 'Search matches...'}
                className={`bg-gray-100 dark:bg-[#2a2a2a] text-gray-900 dark:text-white px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-white dark:focus:bg-[#3a3a3a] transition-all duration-200 ${
                  isRTL ? 'pr-10 text-right' : 'pl-10 text-left'
                }`}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              <SearchIcon
                size={16}
                className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-white ${
                  isRTL ? 'right-3' : 'left-3'
                }`}
              />
            </div>

            {/* Theme Toggle */}
            <ThemeToggle size="md" />

            {/* Language Switcher */}
            <Link
              href={newPath}
              onClick={() => {
                i18n.changeLanguage(switchLocale);
              }}
            >
              <button
                className={`px-4 py-2 border border-gray-300 dark:border-gray-400 text-gray-700 dark:text-gray-300 rounded-lg hover:border-yellow-500 hover:text-yellow-500 transition-all duration-200 font-medium ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                {switchLocale.toUpperCase()}
              </button>
            </Link>

            {/* Login/Register */}
            <div
              className={`hidden md:flex gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <button
                className={`px-4 py-2 text-gray-700 dark:text-white hover:text-yellow-400 transition-colors duration-200 font-medium ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                {t('login')}
              </button>
              <button
                className={`px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg transition-colors duration-200 font-medium ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                {t('register')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
