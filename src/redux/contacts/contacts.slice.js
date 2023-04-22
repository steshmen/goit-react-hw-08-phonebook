// import { createSlice } from "@reduxjs/toolkit";
// import { contacntsInitState } from "./contacts.init-state";

// const contatctsSlice = createSlice({
//   name: 'contacts',
//   initialState: contacntsInitState,
//   reducers: {
//     addContactAction(state, { payload }) {
//       state.unshift(payload);
//     },
//     deleteContactAction(state, { payload }) {
//       return state.filter(contact => contact.id !== payload);
//     }
//   }
// });

// export const contactsReducer = contatctsSlice.reducer;
// export const { addContactAction, deleteContactAction } = contatctsSlice.actions;