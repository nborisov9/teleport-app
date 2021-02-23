import { createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { CitiesApi } from '../../services/api/citiesApi';
import {
  SET_CITY_DATA,
  SET_CITY_NAMES,
  TCitiesPayloads,
  ICityPayload,
  CLEAR_CITY_DATA,
} from './types';

const handlePayload = (payload: TCitiesPayloads): ICityPayload => ({ payload });

const fetchCities = () => (dispatch: Dispatch) => {
  CitiesApi.fetchCityNames()
    .then(({ data }) => dispatch(setCityNames(data._links['ua:item'])))
    .catch((e) => console.error(e));
};

const fetchCitiesData = (city: string) => (dispatch: Dispatch) => {
  CitiesApi.getCitiesData(city)
    .then((data) => dispatch(setCityData(data)))
    .catch((e) => console.error(e));
};

const clearCityData = createAction(CLEAR_CITY_DATA);
const setCityNames = createAction(SET_CITY_NAMES, handlePayload);
const setCityData = createAction(SET_CITY_DATA, handlePayload);

export { setCityNames, setCityData, fetchCities, fetchCitiesData, clearCityData };
