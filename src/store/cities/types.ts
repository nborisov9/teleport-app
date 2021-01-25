export type CityCurrentNameType = {
  href: string;
  name: string;
};

export type ScoreDataType = {
  color: string;
  name: string;
  score_out_of_10: number;
};

export interface IScoreData {
  categories: Array<ScoreDataType>;
  summary: string;
  teleport_city_score: any;
  _links: any;
}

export interface ICityNames {
  cityNames: Array<CityCurrentNameType>;
}

export interface ICitySalaryData {
  job: {
    id?: string;
    title: string;
  };
  salary_percentiles: {
    percentile_25: number;
    percentile_50: number;
    percentile_75: number;
  };
}

export const SET_CITY_NAMES: string = 'cities/SET_CITY_NAMES';
export const SET_CITY_DATA: string = 'cities/SET_CITY_DATA';
export const SET_CITY_COORDS_DATA: string = 'cities/SET_CITY_COORDS_DATA';
export const SET_CITY_IMAGE_DATA: string = 'cities/SET_CITY_IMAGE_DATA';
export const SET_CITY_SCORE_DATA: string = 'cities/SET_CITY_SCORE_DATA';
export const SET_CITY_SALARY_DATA: string = 'cities/SET_CITY_SALARY_DATA';
