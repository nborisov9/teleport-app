import React from 'react';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { clearCities, fetchCities } from '../../store/cities/actions';
import { selectCitiesName, selectCitiesLoadingState } from '../../store/cities/selectors';
import { useCitiesAllStyles } from './theme';
import { LoadingBlock } from '../../components/LoadingBlock';

export const CitiesAll: React.FC = (): React.ReactElement | null => {
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const cities = useSelector(selectCitiesName);
  const loadingState = useSelector(selectCitiesLoadingState);

  const classes = useCitiesAllStyles();

  const buttonClickHandler = () => {
    history.goBack();
    dispatch(clearCities());
  };

  if (!cities) {
    return null;
  }

  return (
    <>
      <Container maxWidth="lg" className={classes.citiesAllContainer}>
        {!loadingState ? (
          <LoadingBlock size={60} />
        ) : (
          cities.map(({ matching_full_name }: { matching_full_name: string }, index: number) => (
            <div key={index} className={classes.citiyName}>
              {matching_full_name}
            </div>
          ))
        )}
      </Container>
      <div className={classes.citiesAllButtonWrapper}>
        <Button
          className={classes.citiesAllButtonBack}
          onClick={buttonClickHandler}
          variant="outlined">
          go back
        </Button>
      </div>
    </>
  );
};
