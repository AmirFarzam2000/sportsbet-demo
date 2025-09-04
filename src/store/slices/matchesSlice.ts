import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Match } from '@/utils/mock/matches';

interface MatchesState {
  matches: Match[];
  filteredMatches: Match[];
  selectedSport: string;
  selectedTab: string;
  searchQuery: string;
  loading: boolean;
}

const initialState: MatchesState = {
  matches: [],
  filteredMatches: [],
  selectedSport: 'all',
  selectedTab: 'all',
  searchQuery: '',
  loading: false,
};

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    setMatches: (state, action: PayloadAction<Match[]>) => {
      state.matches = action.payload;
      state.filteredMatches = action.payload;
    },
    setSelectedSport: (state, action: PayloadAction<string>) => {
      state.selectedSport = action.payload;
    },
    setSelectedTab: (state, action: PayloadAction<string>) => {
      state.selectedTab = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    filterMatches: (state) => {
      let filtered = state.matches;

      // Filter by sport
      if (state.selectedSport !== 'all') {
        filtered = filtered.filter(
          (match) => match.sport === state.selectedSport
        );
      }

      // Filter by tab
      if (state.selectedTab === 'live') {
        filtered = filtered.filter((match) => match.isLive);
      } else if (state.selectedTab === 'all') {
        filtered = filtered.filter((match) => !match.isLive);
      }

      // Filter by search query
      if (state.searchQuery) {
        filtered = filtered.filter(
          (match) =>
            match.team1.name
              .toLowerCase()
              .includes(state.searchQuery.toLowerCase()) ||
            match.team2.name
              .toLowerCase()
              .includes(state.searchQuery.toLowerCase()) ||
            match.tournament
              .toLowerCase()
              .includes(state.searchQuery.toLowerCase()) ||
            match.category
              .toLowerCase()
              .includes(state.searchQuery.toLowerCase())
        );
      }

      state.filteredMatches = filtered;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setMatches,
  setSelectedSport,
  setSelectedTab,
  setSearchQuery,
  filterMatches,
  setLoading,
} = matchesSlice.actions;

export default matchesSlice.reducer;
