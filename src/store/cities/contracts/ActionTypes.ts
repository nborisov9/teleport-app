import { Action } from 'redux';
import { CitiesState } from './state';

export enum CitiesActionsType {
  SET_CITIES = 'SET_CITIES',
}

export interface SetCitiesInterface extends Action<CitiesActionsType> {
  type: CitiesActionsType;
  payload: CitiesState['items'];
}
