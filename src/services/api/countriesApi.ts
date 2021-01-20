import axios from 'axios';

declare var process: {
  env: {
    REACT_APP_COUNTRIES: string;
  };
};

interface ICountryData {
  href: string;
  name: string;
}

export const CountriesApi = {
  async fetchCountriesName(continent: string) {
    return axios.get(`https://api.teleport.org/api/continents/geonames:${continent}/countries/`);
  },

  async getCountriesBasicInfo(countriesName: string) {
    try {
      const { data: allCountries } = await axios.get(process.env.REACT_APP_COUNTRIES);
      const currentCountyHref = allCountries._links['country:items'].filter(
        ({ name }: ICountryData) => name === countriesName,
      );

      const { data: currentContryBasicInfo } = await axios.get(currentCountyHref[0].href);
      return currentContryBasicInfo;
    } catch (e) {
      throw Error(e);
    }
  },

  async getCountriesSalariesInfo(countriesName: string) {
    try {
      const contryData = await CountriesApi.getCountriesBasicInfo(countriesName);
      const salariesData = await axios.get(contryData._links['country:salaries'].href);
      return salariesData;
    } catch (e) {
      throw Error(e);
    }
  },
};
