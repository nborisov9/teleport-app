import { combineReducers } from 'redux';

import { citiesReducer } from './cities/reducer';
import { countriesReducer } from './countries/reducer';

export const rootReducer = combineReducers({
  cities: citiesReducer,
  countries: countriesReducer,
});
