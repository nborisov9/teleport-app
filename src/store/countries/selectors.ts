import { RootState } from '../store';

export const selectCountries = (state: RootState) => state.countries;

export const selectCountriesData = (state: RootState) => selectCountries(state).items;

export const selectCountriesLoadingState = (state: RootState) =>
  selectCountries(state).loadingState;
