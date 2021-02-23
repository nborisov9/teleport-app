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

type TImageData = string;

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
  basicData: IBasicData | null;
  coordsData: ICoordsData | null;
  imageData: TImageData;
  salaryData: Array<ICitySalaryData>;
  scoreData: IScoreData | null;
  isLoaded: boolean;
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

type TCitiesPayloads = Array<
  IBasicData & ICoordsData & TImageData & IScoreData & ICitySalaryData[]
>;

interface ICityPayload {
  payload: TCitiesPayloads;
}

const SET_CITY_NAMES: string = 'cities/SET_CITY_NAMES';
const SET_CITY_DATA: string = 'cities/SET_CITY_DATA';
const CLEAR_CITY_DATA: string = 'cities/CLEAR_CITY_DATA';

export { SET_CITY_NAMES, SET_CITY_DATA, CLEAR_CITY_DATA };

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
