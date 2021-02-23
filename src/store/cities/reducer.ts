import { createReducer } from '@reduxjs/toolkit';
import { ICities, SET_CITY_DATA, SET_CITY_NAMES, CLEAR_CITY_DATA } from './types';

const initialState: ICities = {
  items: {
    cityNames: [],
    cityData: {
      basicData: null,
      coordsData: null,
      scoreData: null,
      salaryData: [],
      imageData: '',
      isLoaded: false,
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
    state.items.cityData.basicData = action.payload[0];
    state.items.cityData.coordsData = action.payload[1];
    state.items.cityData.imageData = action.payload[2];
    state.items.cityData.scoreData = action.payload[3];
    state.items.cityData.salaryData = action.payload[4];
    state.items.cityData.isLoaded = true;
  },
  [CLEAR_CITY_DATA]: (state) => {
    state.items.cityData.basicData = null;
    state.items.cityData.coordsData = null;
    state.items.cityData.scoreData = null;
    state.items.cityData.salaryData = [];
    state.items.cityData.imageData = '';
    state.items.cityData.isLoaded = false;
  },
});
