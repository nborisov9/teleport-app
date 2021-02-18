import { createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { CitiesApi } from '../../services/api/citiesApi';
import {
  SET_CITY_COORDS_DATA,
  SET_CITY_DATA,
  SET_CITY_IMAGE_DATA,
  SET_CITY_NAMES,
  SET_CITY_SALARY_DATA,
  SET_CITY_SCORE_DATA,
  TCitiesPayloads,
  ICityPayload,
  CLEAR_CITY_ITEMS,
} from './types';

const fetchCities = () => (dispatch: Dispatch) => {
  CitiesApi.fetchCityNames()
    .then(({ data }) => dispatch(setCityNames(data._links['ua:item'])))
    .catch((e) => console.error(e));
};

const fetchCitiesData = (city: string) => (dispatch: Dispatch) => {
  CitiesApi.fetchCityData(city)
    .then((data) => dispatch(setCityData(data)))
    .catch((e) => console.error(e));
};

const fetchCitiesCoordsData = (city: string) => (dispatch: Dispatch) => {
  CitiesApi.fetchCityCoordsData(city)
    .then(({ data }) => dispatch(setCityCoordsData(data)))
    .catch((e) => console.error(e));
};

const fetchCitiesImagesData = (city: string) => (dispatch: Dispatch) => {
  CitiesApi.fetchCityImageData(city)
    .then(({ data }) => dispatch(setCityImageData(data.photos[0].image.web)))
    .catch((e) => console.error(e));
};

const fetchCitiesScoresData = (city: string) => (dispatch: Dispatch) => {
  CitiesApi.fetchCityScoreData(city)
    .then(({ data }) => dispatch(setCityScoreData(data)))
    .catch((e) => console.error(e));
};

const fetchCitiesSalariesData = (city: string) => (dispatch: Dispatch) => {
  CitiesApi.fetchCitySalaryData(city)
    .then(({ data }) => dispatch(setCitySalaryData(data.salaries)))
    .catch((e) => console.error(e));
};

const handlePayload = (payload: TCitiesPayloads): ICityPayload => ({ payload });

const setCityNames = createAction(SET_CITY_NAMES, handlePayload);
const setCityData = createAction(SET_CITY_DATA, handlePayload);
const setCityCoordsData = createAction(SET_CITY_COORDS_DATA, handlePayload);
const setCityImageData = createAction(SET_CITY_IMAGE_DATA, handlePayload);
const setCityScoreData = createAction(SET_CITY_SCORE_DATA, handlePayload);
const setCitySalaryData = createAction(SET_CITY_SALARY_DATA, handlePayload);
const clearCityItems = createAction(CLEAR_CITY_ITEMS);

export {
  setCityNames,
  setCityData,
  setCityCoordsData,
  setCityImageData,
  setCityScoreData,
  setCitySalaryData,
  clearCityItems,
  fetchCities,
  fetchCitiesData,
  fetchCitiesCoordsData,
  fetchCitiesImagesData,
  fetchCitiesScoresData,
  fetchCitiesSalariesData,
};
