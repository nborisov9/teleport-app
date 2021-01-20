import { createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { CountriesApi } from '../../services/api/countriesApi';

import {
  CLEAR_COUNTRIES_NAME,
  SET_COUNTRY_NAMES,
  SET_COUNTRY_DATA,
  CLEAR_COUNTRY_DATA,
} from './types';

export const fetchCountries = (country: string) => (dispatch: Dispatch) => {
  CountriesApi.fetchCountriesName(country)
    .then(({ data }) => dispatch(setCountryNames(data._links['country:items'])))
    .catch((e) => console.error(e));
};

export const fetchCountriesData = (countryName: string) => async (dispatch: Dispatch) => {
  try {
    const basicData = await CountriesApi.getCountriesBasicInfo(countryName);
    const { data: salaryData } = await CountriesApi.getCountriesSalariesInfo(countryName);
    dispatch(setCountryData(basicData, salaryData.salaries));
  } catch (e) {
    throw Error(e);
  }
};

export const clearCountriesName = createAction(CLEAR_COUNTRIES_NAME);

export const clearCountryData = createAction(CLEAR_COUNTRY_DATA);

export const setCountryNames = createAction(SET_COUNTRY_NAMES, (payload) => ({ payload }));

export const setCountryData = createAction(SET_COUNTRY_DATA, (basicData, salaryData) => {
  return {
    payload: {
      basicData,
      salaryData,
    },
  };
});
