import { RootState } from '../store';
import { IBasicData, ICityName, ICoordsData, ICities, ICitySalaryData, IScoreData } from './types';

export const selectCities = (state: RootState): ICities => state.cities;

export const selectCityNames = (state: RootState): ICityName[] =>
  selectCities(state).items.cityNames;

export const selectCityBasicData = (state: RootState): IBasicData =>
  selectCities(state).items.cityData.basicData;

export const selectCityCoordsData = (state: RootState): ICoordsData =>
  selectCities(state).items.cityData.coordsData;

export const selectCityImageData = (state: RootState): string =>
  selectCities(state).items.cityData.imageData;

export const selectCityScoreData = (state: RootState): IScoreData =>
  selectCities(state).items.cityData.scoreData;

export const selectCitySalaryData = (state: RootState): ICitySalaryData[] =>
  selectCities(state).items.cityData.salaryData;

export const selectCityLoadingState = (state: RootState): boolean =>
  selectCities(state).items.isLoaded;
