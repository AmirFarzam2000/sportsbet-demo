'use client';
import React, { useEffect } from 'react';
import MatchCard from './MatchCard';
import SearchBar from './SearchBar';
import { matches } from '@/utils/mock/matches';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setMatches,
  setSelectedSport,
  setSelectedTab,
  setSearchQuery,
  filterMatches,
} from '@/store/slices/matchesSlice';

export default function MatchList() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { filteredMatches, selectedSport, selectedTab, searchQuery } =
    useAppSelector((state) => state.matches);

  const sports = [
    { key: 'all', label: t('topSports'), icon: '🏆' },
    { key: 'football', label: t('football'), icon: '⚽' },
    { key: 'tennis', label: t('tennis'), icon: '🎾' },
    { key: 'basketball', label: t('basketball'), icon: '🏀' },
  ];

  const tabs = [
    { key: 'all', label: t('upcomingMatches') },
    { key: 'live', label: t('liveMatches') },
  ];

  useEffect(() => {
    dispatch(setMatches(matches));
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterMatches());
  }, [dispatch, selectedSport, selectedTab, searchQuery]);

  const handleSportChange = (sport: string) => {
    dispatch(setSelectedSport(sport));
  };

  const handleTabChange = (tab: string) => {
    dispatch(setSelectedTab(tab));
  };

  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  return (
    <div className="w-full space-y-6">
      {/* Search Bar */}
      <div className="max-w-2xl">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Sport Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {sports.map((sport) => (
          <button
            key={sport.key}
            onClick={() => handleSportChange(sport.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              selectedSport === sport.key
                ? 'bg-yellow-500 text-black shadow-lg'
                : 'bg-gray-200 dark:bg-[#2a2a2a] text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-[#3a3a3a]'
            }`}
          >
            <span className="text-lg">{sport.icon}</span>
            <span className="hidden sm:inline">{sport.label}</span>
          </button>
        ))}
      </div>

      {/* Content Tabs */}
      <div className="flex gap-4 border-b border-gray-200 dark:border-[#333]">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleTabChange(tab.key)}
            className={`pb-2 px-1 font-medium transition-colors duration-200 ${
              selectedTab === tab.key
                ? 'text-yellow-500 border-b-2 border-yellow-500'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Results Count */}
      {searchQuery && (
        <div className="text-gray-600 dark:text-gray-400 text-sm">
          Found {filteredMatches.length} matches for &quot;{searchQuery}&quot;
        </div>
      )}

      {/* Matches Grid */}
      {filteredMatches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredMatches.map((match) => (
            <MatchCard key={match.id} {...match} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">🏟️</div>
          <p className="text-gray-600 dark:text-gray-400">
            {searchQuery
              ? t('noMatches')
              : selectedTab === 'live'
                ? t('noLiveMatches')
                : t('noUpcomingMatches')}
          </p>
        </div>
      )}

      {/* Popular Leagues Section */}
      <div className="mt-12">
        <h2 className="text-gray-900 dark:text-white text-xl font-bold mb-6">
          {t('popularLeagues')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            {
              name: t('championsLeague'),
              icon: '🏆',
              color: 'from-blue-600 to-blue-800',
            },
            {
              name: t('premierLeague'),
              icon: '⚽',
              color: 'from-red-600 to-red-800',
            },
            {
              name: t('bundesliga'),
              icon: '🇩🇪',
              color: 'from-yellow-600 to-yellow-800',
            },
            {
              name: t('laLiga'),
              icon: '🇪🇸',
              color: 'from-purple-600 to-purple-800',
            },
            {
              name: t('serieA'),
              icon: '🇮🇹',
              color: 'from-green-600 to-green-800',
            },
          ].map((league) => (
            <div
              key={league.name}
              className={`bg-gradient-to-br ${league.color} p-4 rounded-lg text-center cursor-pointer hover:scale-105 transition-transform duration-200`}
            >
              <div className="text-2xl mb-2">{league.icon}</div>
              <h3 className="text-white font-medium text-sm">{league.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
