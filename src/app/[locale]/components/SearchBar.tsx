'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchIcon } from './icons';

interface SearchBarProps {
  onSearch: (_query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    if (!value) {
      onSearch('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder={t('searchPlaceholder')}
        className="w-full bg-gray-100 dark:bg-[#2a2a2a] text-gray-900 dark:text-white px-4 py-3 pl-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-white dark:focus:bg-[#3a3a3a] transition-all duration-200 theme-transition"
      />
      <button
        type="submit"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-white hover:text-yellow-500 transition-colors duration-200"
      >
        <SearchIcon size={20} className="w-5 h-5" />
      </button>
    </form>
  );
}
