import { RootState } from '../store';
import { ICountries, ICountriesDataName, ICountryBasicData, ICountrySalaryData } from './types';

const selectCountries = (state: RootState): ICountries => state.countries;

const selectCountriesDataName = (state: RootState): ICountriesDataName[] =>
  selectCountries(state).items.countries;

const selectCountryBasicData = (state: RootState): ICountryBasicData =>
  selectCountries(state).items.countryData.basicData;

const selectCountrySalaryData = (state: RootState): ICountrySalaryData[] =>
  selectCountries(state).items.countryData.salaryData;

const selectCountryDataLoadingState = (state: RootState): boolean =>
  selectCountries(state).items.countryData.isLoaded;

const selectCountriesLoadingState = (state: RootState): boolean => selectCountries(state).isLoaded;

export {
  selectCountries,
  selectCountriesDataName,
  selectCountryBasicData,
  selectCountrySalaryData,
  selectCountryDataLoadingState,
  selectCountriesLoadingState,
};
