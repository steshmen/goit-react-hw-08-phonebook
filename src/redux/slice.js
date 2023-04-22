import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { initState } from "./initState";

const commonSlice = createSlice({
  name: 'contacts',
  initialState: initState,
  reducers: {
    addContactAction(state, { payload }) {
      state.data.unshift(payload);
    },
    deleteContactAction(state, { payload }) {
      state.data = state.data.filter(contact => contact.id !== payload);
    },
    contactsFilterAction(state, { payload }) {
      state.filter = payload;
    }
  }
});

const persistConfig = {
  key: 'goit',
  storage,
  whitelist: ['data'],
}

export const commonReducer = persistReducer(persistConfig, commonSlice.reducer);
export const { 
  addContactAction, 
  deleteContactAction, 
  contactsFilterAction 
} = commonSlice.actions;

