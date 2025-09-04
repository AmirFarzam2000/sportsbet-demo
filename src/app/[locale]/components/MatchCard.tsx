import Image from 'next/image';
import { Match } from '@/utils/mock/matches';
import { useTranslation } from 'react-i18next';
import LiveIndicator from './LiveIndicator';

const MatchCard = ({
  tournament,
  category,
  time,
  isLive,
  team1,
  team2,
  odds,
  sport,
}: Match) => {
  const { t } = useTranslation();

  const getSportIcon = (sportType: string) => {
    switch (sportType) {
      case 'football':
        return '⚽';
      case 'tennis':
        return '🎾';
      case 'basketball':
        return '🏀';
      default:
        return '🏆';
    }
  };

  const getBettingMarket = (sportType: string) => {
    if (sportType === 'football') {
      return t('matchWinner');
    }
    return t('matchWinner');
  };

  return (
    <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#333] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-300 dark:hover:border-[#555] cursor-pointer group theme-transition">
      {/* Tournament Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-[#333]">
        <div className="flex items-center gap-2">
          <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
            {getSportIcon(sport)}
          </span>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-sm group-hover:text-yellow-400 transition-colors duration-200">
              {tournament}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs">
              {category}
            </p>
          </div>
        </div>
        <div className="text-right">
          <LiveIndicator
            isLive={isLive}
            score={
              isLive && team1.score !== undefined ? team1.score : undefined
            }
            time={time}
          />
        </div>
      </div>

      {/* Teams Section */}
      <div className="p-4 space-y-3">
        {/* Team 1 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={team1.flag}
              alt={team1.name}
              width={24}
              height={24}
              className="rounded-full border border-gray-300 dark:border-gray-600 group-hover:border-yellow-500 transition-colors duration-200"
            />
            <span className="text-gray-900 dark:text-white font-medium text-sm group-hover:text-yellow-400 transition-colors duration-200">
              {team1.name}
            </span>
          </div>
          {isLive && team1.score !== undefined && (
            <span className="text-white font-bold text-lg bg-red-500 px-2 py-1 rounded">
              {team1.score}
            </span>
          )}
        </div>

        {/* VS or Score */}
        <div className="text-center">
          <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
            vs
          </div>
        </div>

        {/* Team 2 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={team2.flag}
              alt={team2.name}
              width={24}
              height={24}
              className="rounded-full border border-gray-300 dark:border-gray-600 group-hover:border-yellow-500 transition-colors duration-200"
            />
            <span className="text-gray-900 dark:text-white font-medium text-sm group-hover:text-yellow-400 transition-colors duration-200">
              {team2.name}
            </span>
          </div>
          {isLive && team2.score !== undefined && (
            <span className="text-white font-bold text-lg bg-red-500 px-2 py-1 rounded">
              {team2.score}
            </span>
          )}
        </div>
      </div>

      {/* Betting Market */}
      <div className="px-4 pb-3">
        <p className="text-gray-600 dark:text-gray-400 text-xs text-center mb-3">
          {getBettingMarket(sport)}
        </p>

        {/* Betting Odds */}
        <div className="grid grid-cols-3 gap-2">
          {sport === 'football' ? (
            <>
              <div className="bg-gray-100 dark:bg-[#2a2a2a] hover:bg-gray-200 dark:hover:bg-[#3a3a3a] p-3 rounded text-center cursor-pointer transition-all duration-200 group-hover:bg-gray-200 dark:group-hover:bg-[#3a3a3a]">
                <div className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                  1
                </div>
                <div className="text-gray-900 dark:text-white font-bold text-lg group-hover:text-yellow-400 transition-colors duration-200">
                  {odds.team1}
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-[#2a2a2a] hover:bg-gray-200 dark:hover:bg-[#3a3a3a] p-3 rounded text-center cursor-pointer transition-all duration-200 group-hover:bg-gray-200 dark:group-hover:bg-[#3a3a3a]">
                <div className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                  X
                </div>
                <div className="text-gray-900 dark:text-white font-bold text-lg group-hover:text-yellow-400 transition-colors duration-200">
                  {odds.draw}
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-[#2a2a2a] hover:bg-gray-200 dark:hover:bg-[#3a3a3a] p-3 rounded text-center cursor-pointer transition-all duration-200 group-hover:bg-gray-200 dark:group-hover:bg-[#3a3a3a]">
                <div className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                  2
                </div>
                <div className="text-white font-bold text-lg group-hover:text-yellow-400 transition-colors duration-200">
                  {odds.team2}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="bg-gray-100 dark:bg-[#2a2a2a] hover:bg-gray-200 dark:hover:bg-[#3a3a3a] p-3 rounded text-center cursor-pointer transition-all duration-200 group-hover:bg-gray-200 dark:group-hover:bg-[#3a3a3a]">
                <div className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                  1
                </div>
                <div className="text-gray-900 dark:text-white font-bold text-lg group-hover:text-yellow-400 transition-colors duration-200">
                  {odds.team1}
                </div>
              </div>
              <div className="col-span-2 bg-[#2a2a2a] hover:bg-[#3a3a3a] p-3 rounded text-center cursor-pointer transition-all duration-200 group-hover:bg-[#3a3a3a]">
                <div className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                  2
                </div>
                <div className="text-white font-bold text-lg group-hover:text-yellow-400 transition-colors duration-200">
                  {odds.team2}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bet Now Button */}
      <div className="px-4 pb-4">
        <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded transition-all duration-200 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-yellow-500/25">
          {t('betNow')}
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
