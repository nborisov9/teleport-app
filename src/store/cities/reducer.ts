import { createReducer } from '@reduxjs/toolkit';
import { CLEAR_CITIES, ICitiesState, SET_CITIES } from './types';

const initialState: ICitiesState = {
  items: [],
  loadingState: false,
};

export const citiesReducer = createReducer(initialState, {
  [SET_CITIES]: (state, action) => {
    state.items = action.payload;
    state.loadingState = true;
  },
  [CLEAR_CITIES]: (state) => {
    state.items = [];
    state.loadingState = false;
  },
});
