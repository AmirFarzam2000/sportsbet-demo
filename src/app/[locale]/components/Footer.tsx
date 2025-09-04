'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useRTL } from '../contexts/RTLContext';

export default function Footer() {
  const { t } = useTranslation();
  const { isRTL } = useRTL();

  return (
    <footer className="bg-gray-100 dark:bg-[#0a0a0a] text-gray-900 dark:text-white border-t border-gray-200 dark:border-[#333] mt-auto theme-transition">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-yellow-500 font-bold text-lg mb-4">
              SportsBet
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Your trusted platform for sports betting with competitive odds and
              a wide range of sports and events.
            </p>
          </div>

          {/* Quick Links */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">
              {t('footer.about')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  {t('footer.contact')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  {t('footer.support')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  {t('footer.privacy')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">
              {t('footer.contact')}
            </h4>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <p>Email: support@sportsbet.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>24/7 Customer Support</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-[#333] mt-8 pt-6">
          <div
            className={`flex flex-col md:flex-row justify-between items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 SportsBet. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                <span className="sr-only">Facebook</span>
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                <span className="sr-only">Twitter</span>
                <Image
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                <span className="sr-only">Instagram</span>
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
