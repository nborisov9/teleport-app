export type MatchFullName = { matching_full_name: string };

export interface ICitiesState {
  items: Array<MatchFullName>;
  loadingState: boolean;
}

export const SET_CITY_NAMES: string = 'cities/SET_CITY_NAMES';
export const SET_CITY_DATA: string = 'cities/SET_CITY_DATA';
export const CLEAR_CITIES: string = 'cities/CLEAR_CITIES';
