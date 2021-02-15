import { createReducer } from '@reduxjs/toolkit';

import {
  CLEAR_COUNTRIES_NAME,
  SET_COUNTRY_NAMES,
  SET_COUNTRY_DATA,
  CLEAR_COUNTRY_DATA,
  CLEAR_COUNTRIES_ITEMS,
  ICountries,
  ICountryBasicData,
} from './types';

const initialState: ICountries = {
  items: {
    countries: [],
    countryData: {
      basicData: {} as ICountryBasicData,
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
    state.items.countryData.basicData = {} as ICountryBasicData;
    state.items.countryData.salaryData = [];
    state.items.countryData.isLoaded = false;
  },

  [CLEAR_COUNTRIES_ITEMS]: (state) => {
    state.items.countries = [];
    state.items.countryData.basicData = {} as ICountryBasicData;
    state.items.countryData.salaryData = [];
    state.items.countryData.isLoaded = false;
    state.isLoaded = false;
  },
});
