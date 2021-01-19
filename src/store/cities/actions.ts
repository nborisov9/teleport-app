import { createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { CitiesApi } from '../../services/api/citiesApi';

import { CLEAR_CITIES, SET_CITIES } from './types';

export const fetchCities = () => (dispatch: Dispatch) => {
  CitiesApi.fetchCitiesName()
    .then(({ data }) => dispatch(setCities(data._embedded['city:search-results'])))
    .catch((e) => console.error(e));
};

export const setCities = createAction(SET_CITIES, (payload) => ({ payload }));
export const clearCities = createAction(CLEAR_CITIES);
