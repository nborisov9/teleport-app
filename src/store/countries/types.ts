interface ICountriesDataName {
  href: string;
  name: string;
}

interface ICountryBasicData {
  name: string;
  currency_code: string;
  geoname_id: number;
  population: number;
}

interface ICountrySalaryData {
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

interface ICountries {
  items: {
    countries: Array<ICountriesDataName>;
    countryData: {
      basicData: ICountryBasicData;
      salaryData: Array<ICountrySalaryData>;
      isLoaded: boolean;
    };
  };
  isLoaded: boolean;
}

const SET_COUNTRY_NAMES: string = 'countries/SET_COUNTRY_NAMES';
const SET_COUNTRY_DATA: string = 'countries/SET_COUNTRY_DATA';
const CLEAR_COUNTRIES_NAME: string = 'countries/CLEAR_COUNTRIES_NAME';
const CLEAR_COUNTRY_DATA: string = 'countries/CLEAR_COUNTRY_DATA';
const CLEAR_COUNTRIES_ITEMS: string = 'countries/CLEAR_COUNTRIES_ITEMS';

export {
  SET_COUNTRY_NAMES,
  SET_COUNTRY_DATA,
  CLEAR_COUNTRIES_NAME,
  CLEAR_COUNTRY_DATA,
  CLEAR_COUNTRIES_ITEMS,
};

export type { ICountriesDataName, ICountryBasicData, ICountrySalaryData, ICountries };
