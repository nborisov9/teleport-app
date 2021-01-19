import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectCountriesData, selectCountriesLoadingState } from '../../store/countries/selectors';

import { useHomeStyles } from '../../pages/Home/theme';
import { clearCountries, fetchCountriesData } from '../../store/countries/actions';
import { LoadingBlock } from '../LoadingBlock';

interface CountriesAllProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const CountriesAll: React.FC<CountriesAllProps> = ({
  classes,
}): React.ReactElement | null => {
  const dispatch = useDispatch();
  const history = useHistory();

  const countries = useSelector(selectCountriesData);
  const loadingState = useSelector(selectCountriesLoadingState);

  const buttonClickHandler = () => {
    history.goBack();
    dispatch(clearCountries());
  };

  const countryClickHandler = (countryName: string) => {
    dispatch(fetchCountriesData(countryName));
  };

  if (!countries) {
    return null;
  }

  return (
    <Container className={classes.countriesAllContainer} maxWidth="lg">
      <Grid container spacing={0}>
        <Grid item xs>
          <Button onClick={buttonClickHandler} className={classes.buttonGoBack} variant="outlined">
            go back
          </Button>
          <Typography variant="h5" className={classes.countriesAllTitle}>
            countries
          </Typography>
          {!loadingState ? (
            <LoadingBlock size={60} />
          ) : (
            countries.map(({ name }, index) => (
              <div
                className={classes.countriesNames}
                key={index + name}
                onClick={() => countryClickHandler(name)}>
                {name}
              </div>
            ))
          )}
        </Grid>
        <Grid item xs>
          <p>xs</p>
        </Grid>
      </Grid>
    </Container>
  );
};
