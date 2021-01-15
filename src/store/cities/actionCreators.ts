import axios from 'axios';

export const fetchCities = () => (dispatch: any) => {
  axios.get('https://api.teleport.org/api/cities/').then(({ data }) => dispatch(setCities(data)));
};

export const setCities = (items: any) => ({
  type: 'SET_CITIES',
  payload: items,
});
