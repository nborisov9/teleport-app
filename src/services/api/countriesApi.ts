import axios from 'axios';

import { ICountriesDataName } from '../../store/countries/types';

const CountriesApi = {
  async fetchCountriesName(continent: string) {
    return axios.get(`https://api.teleport.org/api/continents/geonames:${continent}/countries/`);
  },

  async getCountriesBasicInfo(countriesName: string) {
    try {
      const { data: allCountries } = await axios.get(process.env.REACT_APP_COUNTRIES!);
      const currentCountryHref = allCountries._links['country:items'].filter(
        ({ name }: ICountriesDataName) => name === countriesName,
      );

      return await axios.get(currentCountryHref[0].href);
    } catch (e) {
      throw Error(e);
    }
  },

  async getCountriesSalariesInfo(countriesName: string) {
    try {
      const { data: contryData } = await CountriesApi.getCountriesBasicInfo(countriesName);
      return await axios.get(contryData._links['country:salaries'].href);
    } catch (e) {
      throw Error(e);
    }
  },
};

export { CountriesApi };
