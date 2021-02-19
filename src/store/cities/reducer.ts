import { createReducer } from '@reduxjs/toolkit';
import {
  IBasicData,
  ICities,
  ICoordsData,
  IScoreData,
  SET_CITY_DATA,
  SET_CITY_NAMES,
  CLEAR_CITY_DATA,
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
    state.items.cityData.basicData = action.payload.basicData;
    state.items.cityData.coordsData = action.payload.coordsData;
    state.items.cityData.scoreData = action.payload.scoreData;
    state.items.cityData.salaryData = action.payload.salaryData;
    state.items.cityData.imageData = action.payload.imageData;
    state.items.cityData.isLoaded = true;
  },
  [CLEAR_CITY_DATA]: (state) => {
    state.items.cityData.basicData = {} as IBasicData;
    state.items.cityData.coordsData = {} as ICoordsData;
    state.items.cityData.scoreData = {} as IScoreData;
    state.items.cityData.salaryData = [];
    state.items.cityData.imageData = '';
    state.items.cityData.isLoaded = false;
  },
});
