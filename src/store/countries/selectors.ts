import { RootState } from '../store';

export const selectCountries = (state: RootState) => state.countries;

export const selectCountriesDataName = (state: RootState) => selectCountries(state).items.countries;

export const selectCountryBasicData = (state: RootState) =>
  selectCountries(state).items.countryData.basicData;

export const selectCountrySalaryData = (state: RootState) =>
  selectCountries(state).items.countryData.salaryData;

export const selectCountryDataLoadingState = (state: RootState) =>
  selectCountries(state).items.countryData.isLoaded;

export const selectCountriesLoadingState = (state: RootState) => selectCountries(state).isLoaded;
