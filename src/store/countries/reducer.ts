import { createReducer } from '@reduxjs/toolkit';

import {
  CLEAR_COUNTRIES_NAME,
  SET_COUNTRY_NAMES,
  SET_COUNTRY_DATA,
  CLEAR_COUNTRY_DATA,
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

  [CLEAR_COUNTRIES_NAME]: (state) => {
    state.items.countries = [];
    state.isLoaded = false;
  },

  [SET_COUNTRY_DATA]: (state, action) => {
    state.items.countryData.basicData = action.payload.basicData;
    state.items.countryData.salaryData = action.payload.salaryData.slice(0, 10);
    state.items.countryData.isLoaded = true;
  },

  [CLEAR_COUNTRY_DATA]: (state) => {
    state.items.countryData.basicData = {};
    state.items.countryData.salaryData = [];
    state.items.countryData.isLoaded = false;
  },
});
