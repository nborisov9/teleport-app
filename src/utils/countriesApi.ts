import { ICountriesDataName } from '../store/countries/types';

const filterCountryData = (countryName: ICountriesDataName[], countriesName: string) => {
  return countryName.filter(({ name }: ICountriesDataName) => name === countriesName);
};

export { filterCountryData };
