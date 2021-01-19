import { createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { CountriesApi } from '../../services/api/countriesApi';

import {
  CLEAR_COUNTRIES,
  SET_COUNTRY_NAMES,
  SET_COUNTRY_DATA,
  SET_COUNTRY_SALARY_DATA,
} from './types';

export const fetchCountries = (country: string) => (dispatch: Dispatch) => {
  CountriesApi.fetchCountriesName(country)
    .then(({ data }) => dispatch(setCountryNames(data._links['country:items'])))
    .catch((e) => console.error(e));
};

export const fetchCountriesData = (countryName: string) => (dispatch: Dispatch) => {
  CountriesApi.getCountriesBasicInfo(countryName)
    .then((data) => dispatch(setCountryData(data)))
    .catch((e) => console.error(e));

  CountriesApi.getCountriesSalariesInfo('Cuba').then(({ data }) =>
    dispatch(setCountrySalaryData(data.salaries)),
  );
};

export const setCountryNames = createAction(SET_COUNTRY_NAMES, (payload) => ({ payload }));

export const setCountryData = createAction(SET_COUNTRY_DATA, (payload) => ({ payload }));

export const setCountrySalaryData = createAction(SET_COUNTRY_SALARY_DATA, (payload) => ({
  payload,
}));

export const clearCountries = createAction(CLEAR_COUNTRIES);
