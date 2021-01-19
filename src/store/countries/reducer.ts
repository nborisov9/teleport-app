import { createReducer } from '@reduxjs/toolkit';

import {
  CLEAR_COUNTRIES,
  SET_COUNTRY_NAMES,
  SET_COUNTRY_DATA,
  SET_COUNTRY_SALARY_DATA,
} from './types';

const initialState = {
  items: {
    countries: [],
    countryData: {
      basicData: {},
      salaryData: [],
      isLoaded: false,
    },
  },
  isLoaded: false,
};

export const countriesReducer = createReducer(initialState, {
  [SET_COUNTRY_NAMES]: (state, action) => {
    state.items.countries = action.payload;
    state.isLoaded = true;
  },

  [CLEAR_COUNTRIES]: (state) => {
    state.items.countries = [];
    state.isLoaded = false;
  },

  [SET_COUNTRY_DATA]: (state, action) => {
    state.items.countryData.basicData = { ...action.payload };
  },

  [SET_COUNTRY_SALARY_DATA]: (state, action) => {
    state.items.countryData.salaryData = action.payload;
  },
});
