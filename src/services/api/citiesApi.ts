import axios from 'axios';

import { ICityName } from '../../store/cities/types';

export const CitiesApi = {
  async fetchCityNames() {
    return axios.get(process.env.REACT_APP_URBAN_AREAS!);
  },

  async fetchCityData(cityName: string) {
    return CitiesApi.fetchCityNames()
      .then(({ data }) => data._links['ua:item'].filter(({ name }: ICityName) => name === cityName))
      .then((currentCity) => axios.get(currentCity[0].href))
      .then(({ data }) => data);
  },

  async fetchCityCoordsData(cityName: string) {
    return CitiesApi.fetchCityData(cityName).then(({ _links }) =>
      axios.get(_links['ua:identifying-city'].href),
    );
  },

  async fetchCityImageData(cityName: string) {
    return CitiesApi.fetchCityData(cityName).then(({ _links }) =>
      axios.get(_links['ua:images'].href),
    );
  },

  async fetchCityScoreData(cityName: string) {
    return CitiesApi.fetchCityData(cityName).then(({ _links }) =>
      axios.get(_links['ua:scores'].href),
    );
  },

  async fetchCitySalaryData(cityName: string) {
    return CitiesApi.fetchCityData(cityName).then(({ _links }) =>
      axios.get(_links['ua:salaries'].href),
    );
  },
};
