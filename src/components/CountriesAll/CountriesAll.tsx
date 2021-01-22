import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import IconArrowLeft from '@material-ui/icons/ArrowBack';

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
  fetchCountries,
  fetchCountriesData,
} from '../../store/countries/actions';
import { LoadingBlock } from '../LoadingBlock';
import { CountryBasicInfo } from '../CountryBasicInfo';
import { CountrySalaryInfo } from '../CountrySalaryInfo';

export const CountriesAll: React.FC = (): React.ReactElement | null => {
  const [viewCountryData, setViewCountryData] = React.useState<boolean>(false);

  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const historyPathname = history.location.pathname;
  const continentName = historyPathname.slice(11, 13);

  React.useEffect(() => {
    dispatch(fetchCountries(continentName));
  }, [dispatch, continentName]);

  const countries = useSelector(selectCountriesDataName);
  const loadingState = useSelector(selectCountriesLoadingState);
  const countriesBasicData = useSelector(selectCountryBasicData);
  const countriesSalaryData = useSelector(selectCountrySalaryData);
  const loadingCountryData = useSelector(selectCountryDataLoadingState);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonClickHandler = () => {
    history.push('/');
    dispatch(clearCountryData());
    dispatch(clearCountriesName());
  };

  const countryClickHandler = (countryName: string) => {
    scrollToTop();
    setViewCountryData(true);
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
            countries - {continentName}
          </Typography>
          {!loadingState ? (
            <LoadingBlock size={60} />
          ) : (
            countries.map(({ name }, index) => (
              <div
                className={classes.countriesNames}
                key={index + name}
                onClick={() => countryClickHandler(name)}>
                <NavLink
                  activeStyle={{ fontWeight: 600, color: 'rgb(0, 103, 238)' }}
                  to={`/countries/${continentName}/${name}`}>
                  {name}
                </NavLink>
              </div>
            ))
          )}
        </Grid>
        <Grid item xs>
          {viewCountryData ? (
            !loadingCountryData ? (
              <LoadingBlock size={60} />
            ) : (
              <>
                <CountryBasicInfo classes={classes} countriesBasicData={countriesBasicData} />
                <CountrySalaryInfo classes={classes} countriesSalaryData={countriesSalaryData} />
              </>
            )
          ) : (
            <Typography variant="h5" className={classes.countriesAllSelectTitle}>
              <IconArrowLeft /> select country
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};
