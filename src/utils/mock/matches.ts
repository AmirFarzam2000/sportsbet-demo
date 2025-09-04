export interface Match {
  id: string;
  tournament: string;
  category: string;
  time: string;
  isLive: boolean;
  team1: { name: string; flag: string; score?: number };
  team2: { name: string; flag: string; score?: number };
  odds: { team1: number; draw?: number; team2: number };
  sport: string;
}

export const matches: Match[] = [
  // Football matches
  {
    id: '1',
    tournament: 'Champions League',
    category: 'Group Stage',
    time: 'Today / 20:45',
    isLive: false,
    team1: { name: 'Real Madrid', flag: 'https://flagcdn.com/w40/es.png' },
    team2: { name: 'Bayern Munich', flag: 'https://flagcdn.com/w40/de.png' },
    odds: { team1: 2.1, draw: 3.4, team2: 3.2 },
    sport: 'football',
  },
  {
    id: '2',
    tournament: 'Premier League',
    category: 'Matchday 25',
    time: 'Today / 22:00',
    isLive: false,
    team1: {
      name: 'Manchester City',
      flag: 'https://flagcdn.com/w40/gb-eng.png',
    },
    team2: { name: 'Liverpool', flag: 'https://flagcdn.com/w40/gb-eng.png' },
    odds: { team1: 2.45, draw: 3.3, team2: 2.8 },
    sport: 'football',
  },
  {
    id: '3',
    tournament: 'Bundesliga',
    category: 'Matchday 20',
    time: 'Today / 19:30',
    isLive: true,
    team1: {
      name: 'Borussia Dortmund',
      flag: 'https://flagcdn.com/w40/de.png',
      score: 2,
    },
    team2: {
      name: 'RB Leipzig',
      flag: 'https://flagcdn.com/w40/de.png',
      score: 1,
    },
    odds: { team1: 1.85, draw: 3.6, team2: 4.2 },
    sport: 'football',
  },
  {
    id: '4',
    tournament: 'La Liga',
    category: 'Matchday 24',
    time: 'Tomorrow / 21:00',
    isLive: false,
    team1: { name: 'Barcelona', flag: 'https://flagcdn.com/w40/es.png' },
    team2: { name: 'Atletico Madrid', flag: 'https://flagcdn.com/w40/es.png' },
    odds: { team1: 2.15, draw: 3.25, team2: 3.5 },
    sport: 'football',
  },
  // Tennis matches
  {
    id: '5',
    tournament: 'Australian Open',
    category: 'Men Singles',
    time: 'Today / 23:45',
    isLive: false,
    team1: { name: 'N. Djokovic', flag: 'https://flagcdn.com/w40/rs.png' },
    team2: { name: 'C. Alcaraz', flag: 'https://flagcdn.com/w40/es.png' },
    odds: { team1: 1.65, team2: 2.25 },
    sport: 'tennis',
  },
  {
    id: '6',
    tournament: 'Wimbledon',
    category: 'Women Singles',
    time: 'Today / 20:30',
    isLive: false,
    team1: { name: 'I. Świątek', flag: 'https://flagcdn.com/w40/pl.png' },
    team2: { name: 'A. Sabalenka', flag: 'https://flagcdn.com/w40/by.png' },
    odds: { team1: 1.85, team2: 2.1 },
    sport: 'tennis',
  },
  // Basketball matches
  {
    id: '7',
    tournament: 'NBA',
    category: 'Regular Season',
    time: 'Today / 21:00',
    isLive: false,
    team1: { name: 'Lakers', flag: 'https://flagcdn.com/w40/us.png' },
    team2: { name: 'Warriors', flag: 'https://flagcdn.com/w40/us.png' },
    odds: { team1: 2.3, team2: 1.7 },
    sport: 'basketball',
  },
  {
    id: '8',
    tournament: 'EuroLeague',
    category: 'Playoffs',
    time: 'Tomorrow / 20:15',
    isLive: false,
    team1: { name: 'Real Madrid', flag: 'https://flagcdn.com/w40/es.png' },
    team2: { name: 'CSKA Moscow', flag: 'https://flagcdn.com/w40/ru.png' },
    odds: { team1: 1.9, team2: 1.9 },
    sport: 'basketball',
  },
];

export const getMatchesBySport = (sport: string) => {
  return matches.filter((match) => match.sport === sport);
};

export const getLiveMatches = () => {
  return matches.filter((match) => match.isLive);
};

export const getUpcomingMatches = () => {
  return matches.filter((match) => !match.isLive);
};
