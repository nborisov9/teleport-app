import { createReducer } from '@reduxjs/toolkit';

import { CLEAR_COUNTRIES, SET_COUNTRIES } from './types';

const initialState = {
  items: [],
  loadingState: false,
};

export const countriesReducer = createReducer(initialState, {
  [SET_COUNTRIES]: (state, action) => {
    state.items = action.payload;
    state.loadingState = true;
  },

  [CLEAR_COUNTRIES]: (state) => {
    state.items = [];
    state.loadingState = false;
  },
});
