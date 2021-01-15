import { RootState } from '../store';
import { CitiesState } from './contracts/state';

export const selectCitiesName = (state: RootState): CitiesState => state.cities;
