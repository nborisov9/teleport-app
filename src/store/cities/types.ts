export type CityCurrentNameType = {
  href: string;
  name: string;
};

export interface ICityNames {
  cityNames: Array<CityCurrentNameType>;
}

export const SET_CITY_NAMES: string = 'cities/SET_CITY_NAMES';
export const SET_CITY_DATA: string = 'cities/SET_CITY_DATA';
export const SET_CITY_COORDS_DATA: string = 'cities/SET_CITY_COORDS_DATA';
export const SET_CITY_IMAGE_DATA: string = 'cities/SET_CITY_IMAGE_DATA';
export const SET_CITY_SCORE_DATA: string = 'cities/SET_CITY_SCORE_DATA';
