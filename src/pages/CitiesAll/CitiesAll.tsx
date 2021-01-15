import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCities } from '../../store/cities/actionCreators';
import { LoadingState } from '../../store/cities/contracts/state';
import { selectCitiesName } from '../../store/cities/selectors';
import { useCitiesAllStyles } from './theme';

export const CitiesAll: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const { items } = useSelector(selectCitiesName);
  const { loadingState } = useSelector(selectCitiesName);

  const classes = useCitiesAllStyles();

  return (
    <Container maxWidth="lg" className={classes.citiesAllContainer}>
      {loadingState !== LoadingState.LOADED ? (
        <CircularProgress size={60} disableShrink className={classes.citiesAllLoader} />
      ) : (
        items.map(({ matching_full_name }: { matching_full_name: string }, index: number) => (
          <div key={index} className={classes.citiyName}>
            {matching_full_name}
          </div>
        ))
      )}
    </Container>
  );
};
