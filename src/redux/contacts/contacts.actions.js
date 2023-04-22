import { ADD_CONTACT, DELETE_CONTACT } from "./contacts.types";

export const addContactAction = payload => ({ type: ADD_CONTACT, payload });
export const deleteContactAction = payload => ({ type: DELETE_CONTACT, payload});