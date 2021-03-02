import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectCountriesDataName } from '../../../store/countries/selectors';
import {
  clearCountryData,
  fetchCountries,
  fetchCountriesData,
} from '../../../store/countries/actions';
import { useHomeStyles } from '../../../pages/Countries/theme';
import CountriesListBlock from '../CountriesListBlock';
import CountriesDataBlock from '../CountriesDataBlock';

interface IParams {
  continent: string;
  country: string;
}

export const CountriesAll: React.FC = () => {
  const [viewCountryData, setViewCountryData] = React.useState<boolean>(false);

  const classes = useHomeStyles();
  const dispatch = useDispatch();

  const params: IParams = useParams();
  const { continent, country } = params;

  const countries = useSelector(selectCountriesDataName);

  React.useEffect(() => {
    dispatch(fetchCountries(continent));
  }, [dispatch, continent]);

  React.useEffect(() => {
    if (country) {
      dispatch(fetchCountriesData(country));
      setViewCountryData(true);
      return;
    }
  }, [dispatch, country]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const countryClickHandler = (country: string) => {
    scrollToTop();
    setViewCountryData(true);
    dispatch(clearCountryData());
    dispatch(fetchCountriesData(country));
  };

  if (!countries) {
    return null;
  }

  return (
    <Container className={classes.countriesAllContainer} maxWidth="lg">
      <Grid container spacing={0}>
        <CountriesListBlock countryHandler={countryClickHandler} continentName={continent} />
        <CountriesDataBlock viewCountryData={viewCountryData} />
      </Grid>
    </Container>
  );
};
