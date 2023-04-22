import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer }from '@redux-devtools/extension';

import { contacntsInitState } from './contacts/contacts.init-state';
import { filterInitState } from './filter/filter.init-state';
import { contactsReducer } from './contacts/contacts.reducer';
import { filterReducer } from './filter/filter.reducer';

const initState = {
  contacts: contacntsInitState,
  filter: filterInitState
}

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer
})

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, initState, enhancer);