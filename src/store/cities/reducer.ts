import { createReducer } from '@reduxjs/toolkit';
import { setCities } from './actions';
import { ICitiesState } from './types';

const initialState: ICitiesState = {
  items: [],
  loadingState: false,
};

export const citiesReducer = createReducer(initialState, {
  [setCities.type]: (state, action) => {
    state.items = action.payload;
    state.loadingState = true;
  },
});
