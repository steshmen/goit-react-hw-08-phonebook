import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore 
} from 'redux-persist';

import { commonReducer } from './slice';
import { initState } from './initState';

const inintialState = {
  contacts: initState
}

export const store = configureStore({
  reducer: {
    contacts: commonReducer
  },
  devTools: true,
  preloadedState: inintialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

