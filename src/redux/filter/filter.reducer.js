import { filterInitState } from "./filter.init-state";
import { FILTER } from "./filter.types";

export const filterReducer = (state = filterInitState, {type, payload}) => {
  switch(type) {
    case FILTER:
      return payload;

      default:
        return state;
  }
};