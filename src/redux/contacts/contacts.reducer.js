import { contacntsInitState } from "./contacts.init-state";
import { ADD_CONTACT, DELETE_CONTACT } from "./contacts.types";

export const contactsReducer = (state = contacntsInitState, { type, payload }) => {
  switch(type) {
    case ADD_CONTACT:
      return [payload, ...state];

    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};