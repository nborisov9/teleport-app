export type CityCurrentNameType = {
  href: string;
  name: string;
};

export type ScoreDataType = {
  color: string;
  name: string;
  score_out_of_10: number;
};

export type BasicDataType = {
  continent: string;
  full_name: string;
  _links: any;
  bounding_box: any;
  is_government_partner: any;
  name: any;
  slug: any;
  teleport_city_url: any;
  ua_id: any;
};

export type CoordsDataType = {
  location: {
    latlon: {
      latitude: number;
      longitude: number;
    };
  };
  population: number;
};

export interface ICityData {
  basicData: BasicDataType | {};
  coordsData: CoordsDataType | {};
  imageData: string;
  salaryData: Array<ICitySalaryData>;
  scoreData: IScoreData | {};
}

export interface IScoreData {
  categories: Array<ScoreDataType>;
  summary: string;
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

export interface ICities {
  items: {
    cityData: any;
    cityNames: Array<CityCurrentNameType>;
    isLoaded: boolean;
  };
}

export const SET_CITY_NAMES: string = 'cities/SET_CITY_NAMES';
export const SET_CITY_DATA: string = 'cities/SET_CITY_DATA';
export const SET_CITY_COORDS_DATA: string = 'cities/SET_CITY_COORDS_DATA';
export const SET_CITY_IMAGE_DATA: string = 'cities/SET_CITY_IMAGE_DATA';
export const SET_CITY_SCORE_DATA: string = 'cities/SET_CITY_SCORE_DATA';
export const SET_CITY_SALARY_DATA: string = 'cities/SET_CITY_SALARY_DATA';
