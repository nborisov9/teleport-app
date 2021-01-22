import { RootState } from '../store';
import { MatchFullName } from './types';

export const selectCities = (state: RootState): any => state.cities;

export const selectCityNames = (state: RootState): Array<MatchFullName> =>
  selectCities(state).items.cityNames;

export const selectCityData = (state: RootState) => selectCities(state).items.cityData.basicData;

export const selectCitiesLoadingState = (state: RootState) => selectCities(state).items.isLoaded;
