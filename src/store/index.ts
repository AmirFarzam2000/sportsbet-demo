import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from './slices/matchesSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    matches: matchesReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
