import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  selectCountriesDataName,
  selectCountryBasicData,
  selectCountrySalaryData,
} from '../../store/countries/selectors';
import {
  clearCountryData,
  fetchCountries,
  fetchCountriesData,
} from '../../store/countries/actions';
import { useHomeStyles } from '../../pages/Home/theme';
import CountriesListBlock from '../CountriesListBlock';
import CountriesDataBlock from '../CountriesDataBlock';

export const CountriesAll: React.FC = () => {
  const [viewCountryData, setViewCountryData] = React.useState<boolean>(false);

  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const historyPathname = history.location.pathname;
  const continentName = historyPathname.slice(11, 13);
  const countryName = historyPathname.slice(14);

  React.useEffect(() => {
    dispatch(fetchCountries(continentName));
  }, [dispatch, continentName]);

  React.useEffect(() => {
    if (countryName) {
      dispatch(fetchCountriesData(countryName));
      setViewCountryData(true);
      return;
    }
  }, [dispatch, countryName]);

  const countries = useSelector(selectCountriesDataName);
  const countriesBasicData = useSelector(selectCountryBasicData);
  const countriesSalaryData = useSelector(selectCountrySalaryData);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  return (
    <Container className={classes.countriesAllContainer} maxWidth="lg">
      <Grid container spacing={0}>
        <CountriesListBlock
          countryHandler={countryClickHandler}
          continentName={continentName}
          countiesList={countries}
        />
        <CountriesDataBlock
          viewCountryData={viewCountryData}
          countriesBasicData={countriesBasicData}
          countriesSalaryData={countriesSalaryData}
        />
      </Grid>
    </Container>
  );
};
