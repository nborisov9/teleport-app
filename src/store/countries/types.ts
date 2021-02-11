export interface ICountriesDataName {
  href: string;
  name: string;
}

export interface ICountryBasicData {
  name: string;
  currency_code: string;
  geoname_id: number;
  population: number;
}

export interface ISalaryData {
  job: {
    id: string;
    title: string;
  };
  salary_precentiles: {
    percentile_25: number;
    percentile_50: number;
    percentile_75: number;
  };
}

export interface ICountries {
  items: {
    countries: Array<ICountriesDataName>;
    countryData: {
      basicData: any;
      salaryData: Array<ISalaryData>;
      isLoaded: boolean;
    };
  };
  isLoaded: boolean;
}

export const SET_COUNTRY_NAMES: string = 'countries/SET_COUNTRY_NAMES';
export const SET_COUNTRY_DATA: string = 'countries/SET_COUNTRY_DATA';
export const CLEAR_COUNTRIES_NAME: string = 'countries/CLEAR_COUNTRIES_NAME';
export const CLEAR_COUNTRY_DATA: string = 'countries/CLEAR_COUNTRY_DATA';
export const CLEAR_COUNTRIES_ITEMS: string = 'countries/CLEAR_COUNTRIES_ITEMS';
