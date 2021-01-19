import axios from 'axios';

declare var process: {
  env: {
    REACT_APP_CITIES: string;
  };
};

export const CitiesApi = {
  async fetchCitiesName() {
    return axios.get(process.env.REACT_APP_CITIES);
  },
};
