import { RootState } from '../store';
import {
  BasicDataType,
  CityCurrentNameType,
  CoordsDataType,
  ICities,
  ICitySalaryData,
  IScoreData,
} from './types';

export const selectCities = (state: RootState): ICities => state.cities;

export const selectCityLoadingState = (state: RootState): boolean =>
  selectCities(state).items.isLoaded;

export const selectCityNames = (state: RootState): CityCurrentNameType[] =>
  selectCities(state).items.cityNames;

export const selectCityBasicData = (state: RootState): BasicDataType =>
  selectCities(state).items.cityData.basicData;

export const selectCityCoordsData = (state: RootState): CoordsDataType =>
  selectCities(state).items.cityData.coordsData;

export const selectCityImageData = (state: RootState): string =>
  selectCities(state).items.cityData.imageData;

export const selectCityScoreData = (state: RootState): IScoreData =>
  selectCities(state).items.cityData.scoreData;

export const selectCitySalaryData = (state: RootState): ICitySalaryData[] =>
  selectCities(state).items.cityData.salaryData;
