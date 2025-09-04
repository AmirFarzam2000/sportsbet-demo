// Theme Types
export type Theme = 'light' | 'dark';

// Match Types
export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  status: 'upcoming' | 'live' | 'finished';
  startTime: string;
  odds: {
    home: number;
    draw: number;
    away: number;
  };
  sport: string;
  league: string;
}

// Stats Card Types
export interface StatsCardProps {
  title: string;
  value: string;
  icon: string;
  trend: {
    value: number;
    isPositive: boolean;
  };
  color: 'green' | 'blue' | 'yellow' | 'purple';
}

// Button Loading Types
export interface ButtonLoadingProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white' | 'dark';
}

// Loading Spinner Types
export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

// Match Card Types
export interface MatchCardProps {
  match: Match;
  isLive?: boolean;
}

// Search Bar Types
export interface SearchBarProps {
  placeholder?: string;
  onSearch?: (_query: string) => void;
  className?: string;
}

// Header Types
export interface HeaderProps {
  locale?: string;
}

// RTL Context Types
export interface RTLContextType {
  isRTL: boolean;
  direction: 'ltr' | 'rtl';
}

// Theme Context Types
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (_theme: Theme) => void;
}

// Loading Context Types
export interface LoadingContextType {
  isLoading: boolean;
  setLoading: (_loading: boolean) => void;
}

// Redux State Types
export interface RootState {
  matches: {
    matches: Match[];
    loading: boolean;
    error: string | null;
  };
  ui: {
    sidebarOpen: boolean;
    theme: Theme;
  };
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Navigation Types
export interface NavigationItem {
  label: string;
  href: string;
  icon?: string | React.ReactNode;
}

// Language Types
export type SupportedLocale = 'en' | 'fa';

// Translation Types
export interface TranslationKeys {
  header: string;
  Sports: string;
  Live: string;
  login: string;
  register: string;
  [key: string]: string;
}
