import { createReducer } from '@reduxjs/toolkit';
import {
  IBasicData,
  ICities,
  ICoordsData,
  IScoreData,
  SET_CITY_COORDS_DATA,
  SET_CITY_DATA,
  SET_CITY_IMAGE_DATA,
  SET_CITY_NAMES,
  SET_CITY_SALARY_DATA,
  SET_CITY_SCORE_DATA,
  CLEAR_CITY_ITEMS,
} from './types';

const initialState: ICities = {
  items: {
    cityNames: [],
    cityData: {
      basicData: {} as IBasicData,
      coordsData: {} as ICoordsData,
      scoreData: {} as IScoreData,
      salaryData: [],
      imageData: '',
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
    state.items.isLoaded = true;
  },

  [SET_CITY_COORDS_DATA]: (state, action) => {
    state.items.cityData.coordsData = action.payload;
    state.items.isLoaded = true;
  },

  [SET_CITY_IMAGE_DATA]: (state, action) => {
    state.items.cityData.imageData = action.payload;
    state.items.isLoaded = true;
  },

  [SET_CITY_SCORE_DATA]: (state, action) => {
    state.items.cityData.scoreData = action.payload;
    state.items.isLoaded = true;
  },

  [SET_CITY_SALARY_DATA]: (state, action) => {
    state.items.cityData.salaryData = action.payload;
    state.items.isLoaded = true;
  },
  [CLEAR_CITY_ITEMS]: (state) => {
    state.items.cityNames = [];
    state.items.cityData.basicData = {} as IBasicData;
    state.items.cityData.coordsData = {} as ICoordsData;
    state.items.cityData.scoreData = {} as IScoreData;
    state.items.cityData.salaryData = [];
    state.items.cityData.imageData = '';
    state.items.isLoaded = false;
  },
});
