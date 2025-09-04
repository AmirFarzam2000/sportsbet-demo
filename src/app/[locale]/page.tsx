'use client';
import { useState } from 'react';
import MatchList from './components/MatchesLists';
import StatsCard from './components/StatsCard';
import ButtonLoading from './components/ButtonLoading';
import ReduxWrapper from './components/ReduxWrapper';
import LoadingWrapper from './components/LoadingWrapper';

export default function Home() {
  const [isStartBettingLoading, setIsStartBettingLoading] = useState(false);
  const [isLearnMoreLoading, setIsLearnMoreLoading] = useState(false);

  return (
    <LoadingWrapper>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 dark:from-[#1a1a1a] dark:to-[#2a2a2a] rounded-2xl p-8 overflow-hidden theme-transition">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to <span className="text-yellow-500">SportsBet</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-2xl">
              Discover the best odds and place your bets on your favorite
              sports. From football to tennis, we&apos;ve got you covered with
              competitive odds.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 min-w-[140px] justify-center"
                onClick={() => {
                  setIsStartBettingLoading(true);
                  setTimeout(() => setIsStartBettingLoading(false), 2000);
                }}
                disabled={isStartBettingLoading}
              >
                {isStartBettingLoading ? (
                  <>
                    <ButtonLoading size="sm" color="primary" />
                    Loading...
                  </>
                ) : (
                  'Start Betting'
                )}
              </button>
              <button
                className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 min-w-[140px] justify-center"
                onClick={() => {
                  setIsLearnMoreLoading(true);
                  setTimeout(() => setIsLearnMoreLoading(false), 1500);
                }}
                disabled={isLearnMoreLoading}
              >
                {isLearnMoreLoading ? (
                  <>
                    <ButtonLoading size="sm" color="white" />
                    Loading...
                  </>
                ) : (
                  'Learn More'
                )}
              </button>
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Live Matches"
            value="12"
            icon="⚽"
            trend={{ value: 8, isPositive: true }}
            color="green"
          />
          <StatsCard
            title="Total Odds"
            value="1,247"
            icon="📊"
            trend={{ value: 12, isPositive: true }}
            color="blue"
          />
          <StatsCard
            title="Active Users"
            value="2.4K"
            icon="👥"
            trend={{ value: 5, isPositive: false }}
            color="yellow"
          />
          <StatsCard
            title="Today's Volume"
            value="$45.2K"
            icon="💰"
            trend={{ value: 23, isPositive: true }}
            color="purple"
          />
        </div>

        {/* Main Content */}
        <ReduxWrapper>
          <MatchList />
        </ReduxWrapper>
      </div>
    </LoadingWrapper>
  );
}
