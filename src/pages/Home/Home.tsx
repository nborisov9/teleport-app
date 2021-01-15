import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchCities } from '../../store/cities/actionCreators';

export const Home: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return <div></div>;
};
