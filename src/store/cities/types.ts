interface ICityName {
  href: string;
  name: string;
}

interface IScoreData {
  color: string;
  name: string;
  score_out_of_10: number;
}

type IBasicData = {
  continent: string;
  full_name: string;
};

type ICoordsData = {
  location: {
    latlon: {
      latitude: number;
      longitude: number;
    };
  };
  population: number;
};

interface ICityData {
  basicData: IBasicData;
  coordsData: ICoordsData;
  imageData: string;
  salaryData: Array<ICitySalaryData>;
  scoreData: IScoreData;
}

interface IScoreData {
  categories: Array<IScoreData>;
  summary: string;
}

interface ICityNames {
  cityNames: Array<ICityName>;
}

interface ICitySalaryData {
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

interface ICities {
  items: {
    cityData: ICityData;
    cityNames: Array<ICityName>;
    isLoaded: boolean;
  };
}

const SET_CITY_NAMES: string = 'cities/SET_CITY_NAMES';
const SET_CITY_DATA: string = 'cities/SET_CITY_DATA';
const SET_CITY_COORDS_DATA: string = 'cities/SET_CITY_COORDS_DATA';
const SET_CITY_IMAGE_DATA: string = 'cities/SET_CITY_IMAGE_DATA';
const SET_CITY_SCORE_DATA: string = 'cities/SET_CITY_SCORE_DATA';
const SET_CITY_SALARY_DATA: string = 'cities/SET_CITY_SALARY_DATA';

type TCitiesPayloads = ICityName | IBasicData | ICoordsData | string | IScoreData | ICitySalaryData;

interface ICityPayload {
  payload: TCitiesPayloads;
}

export {
  SET_CITY_NAMES,
  SET_CITY_DATA,
  SET_CITY_COORDS_DATA,
  SET_CITY_IMAGE_DATA,
  SET_CITY_SCORE_DATA,
  SET_CITY_SALARY_DATA,
};

export type {
  ICityName,
  IScoreData,
  IBasicData,
  ICoordsData,
  ICityData,
  ICityNames,
  ICitySalaryData,
  ICities,
  TCitiesPayloads,
  ICityPayload,
};
