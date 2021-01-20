import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  selectCountriesDataName,
  selectCountriesLoadingState,
  selectCountryBasicData,
  selectCountryDataLoadingState,
  selectCountrySalaryData,
} from '../../store/countries/selectors';

import { useHomeStyles } from '../../pages/Home/theme';
import {
  clearCountriesName,
  clearCountryData,
  fetchCountriesData,
} from '../../store/countries/actions';
import { LoadingBlock } from '../LoadingBlock';
import { CountryBasicInfo } from '../CountryBasicInfo';
import { CountrySalaryInfo } from '../CountrySalaryInfo';

interface CountriesAllProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const CountriesAll: React.FC<CountriesAllProps> = ({
  classes,
}): React.ReactElement | null => {
  const dispatch = useDispatch();
  const history = useHistory();

  const countries = useSelector(selectCountriesDataName);
  const loadingState = useSelector(selectCountriesLoadingState);
  const countriesBasicData = useSelector(selectCountryBasicData);
  const countriesSalaryData = useSelector(selectCountrySalaryData);
  const loadingCountryData = useSelector(selectCountryDataLoadingState);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonClickHandler = () => {
    history.goBack();
    dispatch(clearCountryData());
    dispatch(clearCountriesName());
  };

  const countryClickHandler = (countryName: string) => {
    scrollToTop();
    dispatch(clearCountryData());
    dispatch(fetchCountriesData(countryName));
  };

  if (!countries) {
    return null;
  }

  if (!countriesBasicData || !countriesSalaryData) {
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
          {!loadingCountryData ? (
            <LoadingBlock size={60} />
          ) : (
            <>
              <CountryBasicInfo classes={classes} countriesBasicData={countriesBasicData} />
              <CountrySalaryInfo classes={classes} countriesSalaryData={countriesSalaryData} />
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};
