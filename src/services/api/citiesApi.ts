import axios from 'axios';

import { ICityName } from '../../store/cities/types';

const CitiesApi = {
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
    return CitiesApi.fetchCityData(cityName)
      .then(({ _links }) => axios.get(_links['ua:identifying-city'].href))
      .then(({ data }) => data);
  },

  async fetchCityImageData(cityName: string) {
    return CitiesApi.fetchCityData(cityName)
      .then(({ _links }) => axios.get(_links['ua:images'].href))
      .then(({ data }) => data.photos[0].image.web);
  },

  async fetchCityScoreData(cityName: string) {
    return CitiesApi.fetchCityData(cityName)
      .then(({ _links }) => axios.get(_links['ua:scores'].href))
      .then(({ data }) => data);
  },

  async fetchCitySalaryData(cityName: string) {
    return CitiesApi.fetchCityData(cityName)
      .then(({ _links }) => axios.get(_links['ua:salaries'].href))
      .then(({ data }) => data.salaries);
  },

  async getCitiesData(city: string) {
    return Promise.all([
      CitiesApi.fetchCityData(city),
      CitiesApi.fetchCityCoordsData(city),
      CitiesApi.fetchCityImageData(city),
      CitiesApi.fetchCityScoreData(city),
      CitiesApi.fetchCitySalaryData(city),
    ]).then((data) => data);
  },
};

export { CitiesApi };
