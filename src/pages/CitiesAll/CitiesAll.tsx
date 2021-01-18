import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCities } from '../../store/cities/actions';
import { selectCitiesName, selectCitiesLoadingState } from '../../store/cities/selectors';
import { useCitiesAllStyles } from './theme';

export const CitiesAll: React.FC = (): React.ReactElement | null => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const cities = useSelector(selectCitiesName);
  const loadingState = useSelector(selectCitiesLoadingState);

  const classes = useCitiesAllStyles();

  if (!cities) {
    return null;
  }

  return (
    <Container maxWidth="lg" className={classes.citiesAllContainer}>
      {!loadingState ? (
        <CircularProgress size={60} disableShrink className={classes.citiesAllLoader} />
      ) : (
        cities.map(({ matching_full_name }: { matching_full_name: string }, index: number) => (
          <div key={index} className={classes.citiyName}>
            {matching_full_name}
          </div>
        ))
      )}
    </Container>
  );
};
