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

const fetchCities = () => (dispatch: Dispatch) => {
  CitiesApi.fetchCityNames()
    .then(({ data }) => dispatch(setCityNames(data._links['ua:item'])))
    .catch((e) => console.error(e));
};

const fetchCitiesData = (city: string) => async (dispatch: Dispatch) => {
  try {
    const basicData = await CitiesApi.fetchCityData(city);
    const { data: coordsData } = await CitiesApi.fetchCityCoordsData(city);
    const { data: imageData } = await CitiesApi.fetchCityImageData(city);
    const { data: scoreData } = await CitiesApi.fetchCityScoreData(city);
    const { data: salaryData } = await CitiesApi.fetchCitySalaryData(city);
    dispatch(
      setCityData(
        basicData,
        coordsData,
        imageData.photos[0].image.web,
        scoreData,
        salaryData.salaries,
      ),
    );
  } catch (e) {
    throw Error(e);
  }
};

const handlePayload = (payload: TCitiesPayloads): ICityPayload => ({ payload });

const clearCityData = createAction(CLEAR_CITY_DATA);
const setCityNames = createAction(SET_CITY_NAMES, handlePayload);
const setCityData = createAction(
  SET_CITY_DATA,
  (basicData, coordsData, imageData, scoreData, salaryData) => ({
    payload: {
      basicData,
      coordsData,
      imageData,
      scoreData,
      salaryData,
    },
  }),
);

export { setCityNames, setCityData, fetchCities, fetchCitiesData, clearCityData };
