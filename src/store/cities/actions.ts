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
} from './types';

export const fetchCities = () => (dispatch: Dispatch) => {
  CitiesApi.fetchCityNames()
    .then(({ data }) => dispatch(setCityNames(data._links['ua:item'])))
    .catch((e) => console.error(e));
};

export const fetchCitiesData = (city: string) => (dispatch: Dispatch) => {
  CitiesApi.fetchCityData(city)
    .then((data) => dispatch(setCityData(data)))
    .catch((e) => console.error(e));
};

export const fetchCitiesCoordsData = (city: string) => (dispatch: Dispatch) => {
  CitiesApi.fetchCityCoordsData(city)
    .then(({ data }) => dispatch(setCityCoordsData(data)))
    .catch((e) => console.error(e));
};

export const fetchCitiesImagesData = (city: string) => (dispatch: Dispatch) => {
  CitiesApi.fetchCityImageData(city)
    .then(({ data }) => dispatch(setCityImageData(data.photos[0].image.web)))
    .catch((e) => console.error(e));
};

export const fetchCitiesScoresData = (city: string) => (dispatch: Dispatch) => {
  CitiesApi.fetchCityScoreData(city)
    .then(({ data }) => dispatch(setCityScoreData(data)))
    .catch((e) => console.error(e));
};

export const fetchCitiesSalariesData = (city: string) => (dispatch: Dispatch) => {
  CitiesApi.fetchCitySalaryData(city)
    .then(({ data }) => dispatch(setCitySalaryData(data.salaries)))
    .catch((e) => console.error(e));
};

export const setCityNames = createAction(SET_CITY_NAMES, (payload) => ({ payload }));

export const setCityData = createAction(SET_CITY_DATA, (payload) => ({ payload }));

export const setCityCoordsData = createAction(SET_CITY_COORDS_DATA, (payload) => ({ payload }));

export const setCityImageData = createAction(SET_CITY_IMAGE_DATA, (payload) => ({ payload }));

export const setCityScoreData = createAction(SET_CITY_SCORE_DATA, (payload) => ({ payload }));

export const setCitySalaryData = createAction(SET_CITY_SALARY_DATA, (payload) => ({ payload }));
