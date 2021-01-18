import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Dispatch } from 'redux';

import { CLEAR_COUNTRIES, SET_COUNTRIES } from './types';

export const fetchCountries = (country: string) => (dispatch: Dispatch) => {
  axios
    .get(`https://api.teleport.org/api/continents/geonames:${country}/countries/`)
    .then(({ data }) => dispatch(setCountries(data._links['country:items'])))
    .catch((e) => console.error(e));
};

export const setCountries = createAction(SET_COUNTRIES, (payload) => ({ payload }));

export const clearCountries = createAction(CLEAR_COUNTRIES);
