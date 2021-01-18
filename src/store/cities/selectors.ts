import { RootState } from '../store';
import { ICitiesState } from './types';

export const selectCities = (state: RootState): ICitiesState => state.cities;

export const selectCitiesName = (state: RootState): ICitiesState['items'] =>
  selectCities(state).items;

export const selectCitiesLoadingState = (state: RootState): ICitiesState['loadingState'] =>
  selectCities(state).loadingState;
