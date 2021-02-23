import { createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { CountriesApi } from '../../services/api/countriesApi';
import {
  CLEAR_COUNTRIES_NAME,
  SET_COUNTRY_NAMES,
  SET_COUNTRY_DATA,
  CLEAR_COUNTRY_DATA,
  CLEAR_COUNTRIES_ITEMS,
  TCountriesPayload,
  ICountryPayload,
} from './types';

const hadnlePayload = (payload: TCountriesPayload): ICountryPayload => ({ payload });

const fetchCountries = (continent: string) => (dispatch: Dispatch) => {
  CountriesApi.fetchCountriesName(continent)
    .then(({ data }) => dispatch(setCountryNames(data._links['country:items'])))
    .catch((e) => console.error(e));
};

const fetchCountriesData = (countryName: string) => async (dispatch: Dispatch) => {
  CountriesApi.getCountriesData(countryName)
    .then((data) => dispatch(setCountryData(data)))
    .catch((e) => console.error(e));
};

const clearCountriesName = createAction(CLEAR_COUNTRIES_NAME);
const clearCountryData = createAction(CLEAR_COUNTRY_DATA);
const clearCountriesItems = createAction(CLEAR_COUNTRIES_ITEMS);
const setCountryNames = createAction(SET_COUNTRY_NAMES, hadnlePayload);
const setCountryData = createAction(SET_COUNTRY_DATA, hadnlePayload);

export {
  fetchCountries,
  fetchCountriesData,
  clearCountriesName,
  clearCountryData,
  clearCountriesItems,
  setCountryNames,
  setCountryData,
};
