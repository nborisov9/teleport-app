export type MatchFullName = { matching_full_name: string };

export interface ICitiesState {
  items: Array<MatchFullName>;
  loadingState: boolean;
}

export const SET_CITIES: string = 'cities/SET_CITIES';
