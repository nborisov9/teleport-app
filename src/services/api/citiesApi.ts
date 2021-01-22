import axios from 'axios';

declare var process: {
  env: {
    REACT_APP_CITIES: string;
  };
};

interface ICitiesData {
  matching_full_name: string;
  _links: {
    ['city:item']: {
      href: string;
    };
  };
}

export const CitiesApi = {
  async fetchCityNames() {
    return axios.get(process.env.REACT_APP_CITIES);
  },

  async fetchCitiesData(cityName: string) {
    return CitiesApi.fetchCityNames()
      .then(({ data }) => {
        return data._embedded['city:search-results'].filter((data: ICitiesData) => {
          return data.matching_full_name.toLowerCase().includes(cityName.toLowerCase());
        });
      })
      .then((currentCitiesData) => currentCitiesData[0]._links['city:item'])
      .then((citiesDatalink) => axios.get(citiesDatalink.href))
      .then(({ data }) => data);
  },
};
