import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { clearCountriesName, clearCountryData } from '../../store/countries/actions';
import { useHomeStyles } from '../../pages/Home/theme';
import { selectCountriesLoadingState } from '../../store/countries/selectors';
import { LoadingBlock } from '../LoadingBlock';
import { ICountriesDataName } from '../../store/countries/types';

interface CountriesListBlockProps {
  continentName: string;
  countiesList: ICountriesDataName[];
  countryHandler: (name: string) => void;
}

const CountriesListBlock: React.FC<CountriesListBlockProps> = ({
  continentName,
  countiesList,
  countryHandler,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useHomeStyles();

  const loadingState = useSelector(selectCountriesLoadingState);

  const buttonClickHandler = () => {
    history.push('/');
    dispatch(clearCountryData());
    dispatch(clearCountriesName());
  };

  const activeStyleLink: React.CSSProperties = { fontWeight: 600, color: 'rgb(0, 103, 238)' };

  return (
    <Grid item xs>
      <Button onClick={buttonClickHandler} className={classes.buttonGoBack} variant="outlined">
        go back
      </Button>
      <Typography variant="h5" className={classes.countriesAllTitle}>
        countries - {continentName}
      </Typography>
      {!loadingState ? (
        <LoadingBlock size={60} marginTop={170} />
      ) : (
        countiesList.map(({ name }) => (
          <div className={classes.countriesNames} key={name} onClick={() => countryHandler(name)}>
            <NavLink activeStyle={activeStyleLink} to={`/countries/${continentName}/${name}`}>
              {name}
            </NavLink>
          </div>
        ))
      )}
    </Grid>
  );
};

export default CountriesListBlock;
