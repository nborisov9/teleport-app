import { createReducer } from '@reduxjs/toolkit';
import { CLEAR_CITIES, SET_CITY_DATA, SET_CITY_NAMES } from './types';

const initialState = {
  items: {
    cityNames: [],
    cityData: {
      basicData: {},
    },
    isLoaded: false,
  },
};

export const citiesReducer = createReducer(initialState, {
  [SET_CITY_NAMES]: (state, action) => {
    state.items.cityNames = action.payload;
    state.items.isLoaded = true;
  },
  [SET_CITY_DATA]: (state, action) => {
    state.items.cityData.basicData = action.payload;
  },
  [CLEAR_CITIES]: (state) => {
    state.items.cityNames = [];
    state.items.isLoaded = false;
  },
});
