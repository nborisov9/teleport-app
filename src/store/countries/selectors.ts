import { RootState } from '../store';
import { ICountries, ICountriesDataName, ICountrySalaryData } from './types';

export const selectCountries = (state: RootState): ICountries => state.countries;

export const selectCountriesDataName = (state: RootState): ICountriesDataName[] =>
  selectCountries(state).items.countries;

export const selectCountryBasicData = (state: RootState) =>
  selectCountries(state).items.countryData.basicData;

export const selectCountrySalaryData = (state: RootState): ICountrySalaryData[] =>
  selectCountries(state).items.countryData.salaryData;

export const selectCountryDataLoadingState = (state: RootState): boolean =>
  selectCountries(state).items.countryData.isLoaded;

export const selectCountriesLoadingState = (state: RootState): boolean =>
  selectCountries(state).isLoaded;
