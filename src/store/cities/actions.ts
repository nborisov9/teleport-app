import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Dispatch } from 'redux';

import { SET_CITIES } from './types';

export const fetchCities = () => (dispatch: Dispatch) => {
  axios
    .get('https://api.teleport.org/api/cities/')
    .then(({ data }) => dispatch(setCities(data._embedded['city:search-results'])))
    .catch((e) => console.error(e));
};

export const setCities = createAction(SET_CITIES, (payload) => ({ payload }));
