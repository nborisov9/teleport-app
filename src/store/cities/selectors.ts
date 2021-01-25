import { RootState } from '../store';
import { ICityNames } from './types';

export const selectCities = (state: RootState): any => state.cities;

export const selectCityLoadingState = (state: RootState) => selectCities(state).items.isLoaded;

export const selectCityNames = (state: RootState): ICityNames =>
  selectCities(state).items.cityNames;

export const selectCityBasicData = (state: RootState) =>
  selectCities(state).items.cityData.basicData;

export const selectCityCoordsData = (state: RootState) =>
  selectCities(state).items.cityData.coordsData;

export const selectCityImageData = (state: RootState) =>
  selectCities(state).items.cityData.imageData;

export const selectCityScoreData = (state: RootState) =>
  selectCities(state).items.cityData.scoreData;
