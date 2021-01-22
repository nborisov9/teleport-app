import { createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { CitiesApi } from '../../services/api/citiesApi';

import { CLEAR_CITIES, SET_CITY_DATA, SET_CITY_NAMES } from './types';

export const fetchCities = () => (dispatch: Dispatch) => {
  CitiesApi.fetchCityNames()
    .then(({ data }) => dispatch(setCityNames(data._embedded['city:search-results'])))
    .catch((e) => console.error(e));
};

export const fetchCitiesData = (city: string) => (dispatch: Dispatch) => {
  CitiesApi.fetchCitiesData(city)
    .then((data) => {
      dispatch(setCityData(data));
    })
    .catch((e) => console.error(e));
};

export const setCityNames = createAction(SET_CITY_NAMES, (payload) => ({ payload }));

export const setCityData = createAction(SET_CITY_DATA, (payload) => ({ payload }));

export const clearCities = createAction(CLEAR_CITIES);
