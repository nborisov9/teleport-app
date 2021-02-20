import { RootState } from '../store';
import { IBasicData, ICityName, ICoordsData, ICities, ICitySalaryData, IScoreData } from './types';

const selectCities = (state: RootState): ICities => state.cities;

const selectCityNames = (state: RootState): ICityName[] => selectCities(state).items.cityNames;

const selectCityBasicData = (state: RootState): IBasicData =>
  selectCities(state).items.cityData.basicData;

const selectCityCoordsData = (state: RootState): ICoordsData =>
  selectCities(state).items.cityData.coordsData;

const selectCityImageData = (state: RootState): string =>
  selectCities(state).items.cityData.imageData;

const selectCityScoreData = (state: RootState): IScoreData =>
  selectCities(state).items.cityData.scoreData;

const selectCitySalaryData = (state: RootState): ICitySalaryData[] =>
  selectCities(state).items.cityData.salaryData;

const selectCityDataLoadingState = (state: RootState): boolean =>
  selectCities(state).items.cityData.isLoaded;

const selectCityNamesLoadingState = (state: RootState): boolean =>
  selectCities(state).items.isLoaded;

export {
  selectCities,
  selectCityNames,
  selectCityBasicData,
  selectCityCoordsData,
  selectCityImageData,
  selectCityScoreData,
  selectCitySalaryData,
  selectCityDataLoadingState,
  selectCityNamesLoadingState,
};
