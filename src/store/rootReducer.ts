import { combineReducers } from 'redux';

import { citiesReducer } from './cities/reducer';

export const rootReducer = combineReducers({
  cities: citiesReducer,
});
