import axios from 'axios';
import { CityCurrentNameType } from '../../store/cities/types';

declare var process: {
  env: {
    REACT_APP_URBAN_AREAS: string;
  };
};

export const CitiesApi = {
  async fetchCityNames() {
    return axios.get(process.env.REACT_APP_URBAN_AREAS);
  },

  async fetchCityData(cityName: string) {
    return CitiesApi.fetchCityNames()
      .then(({ data }) => {
        return data._links['ua:item'].filter((data: CityCurrentNameType) => {
          return data.name === cityName;
        });
      })
      .then((currentCity) => axios.get(currentCity[0].href))
      .then(({ data }) => data);
  },

  async fetchCityCoordsData(cityName: string) {
    return CitiesApi.fetchCityData(cityName).then((data) => {
      return axios.get(data._links['ua:identifying-city'].href);
    });
  },

  async fetchCityImageData(cityName: string) {
    return CitiesApi.fetchCityData(cityName).then((data) => {
      return axios.get(data._links['ua:images'].href);
    });
  },

  async fetchCityScoreData(cityName: string) {
    return CitiesApi.fetchCityData(cityName).then((data) => {
      return axios.get(data._links['ua:scores'].href);
    });
  },

  async fetchCitySalaryData(cityName: string) {
    return CitiesApi.fetchCityData(cityName).then((data) => {
      return axios.get(data._links['ua:salaries'].href);
    });
  },
};
