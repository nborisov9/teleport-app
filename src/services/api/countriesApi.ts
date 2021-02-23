import axios from 'axios';

import { filterCountryData } from '../../utils/countriesApi';

const CountriesApi = {
  async fetchCountriesName(continent: string) {
    return axios.get(`https://api.teleport.org/api/continents/geonames:${continent}/countries/`);
  },

  async fetchCountriesBasicInfo(countriesName: string) {
    return await axios
      .get(process.env.REACT_APP_COUNTRIES!)
      .then(({ data }) => filterCountryData(data._links['country:items'], countriesName))
      .then((currentCountryHref) => axios.get(currentCountryHref[0].href));
  },

  async fetchCountriesSalariesInfo(countriesName: string) {
    return CountriesApi.fetchCountriesBasicInfo(countriesName).then(({ data }) =>
      axios.get(data._links['country:salaries'].href),
    );
  },

  async getCountriesData(countriesName: string) {
    return Promise.all([
      CountriesApi.fetchCountriesBasicInfo(countriesName).then(({ data }) => data),
      CountriesApi.fetchCountriesSalariesInfo(countriesName).then(({ data }) => data.salaries),
    ]);
  },
};

export { CountriesApi };
