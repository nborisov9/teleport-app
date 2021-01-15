import axios from 'axios';
import { Dispatch } from 'redux';

import { SetCitiesInterface, CitiesActionsType } from './contracts/ActionTypes';
import { CitiesState } from './contracts/state';

export const fetchCities = () => (dispatch: Dispatch<SetCitiesInterface>) => {
  axios
    .get('https://api.teleport.org/api/cities/')
    .then(({ data }) => dispatch(setCities(data._embedded['city:search-results'])))
    .catch((e) => console.error(e));
};

export const setCities = (items: CitiesState['items']): SetCitiesInterface => ({
  type: CitiesActionsType.SET_CITIES,
  payload: items,
});

export type TweetsActions = SetCitiesInterface;
