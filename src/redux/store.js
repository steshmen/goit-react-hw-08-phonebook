import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice';
import { initState } from './initState';
import { filterReducer } from './filterSlice';

const inintialState = {
  contacts: initState.contacts,
  filter: initState.filter,
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  devTools: true,
  preloadedState: inintialState,
});
