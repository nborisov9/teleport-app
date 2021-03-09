import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { clearCountriesName, clearCountryData } from '../../../store/countries/actions';
import { useHomeStyles } from '../../../pages/Countries/theme';
import {
  selectCountriesDataName,
  selectCountriesLoadingState,
} from '../../../store/countries/selectors';
import { LoadingBlock } from '../../MainPage/LoadingBlock';
import { getColorStyle } from '../../../utils/countriesListBlock';
import { MAIN_BLUE } from '../../../helpers/constants';

interface CountriesListBlockProps {
  continentName: string;
  countryHandler: (name: string) => void;
}

const CountriesListBlock: React.FC<CountriesListBlockProps> = ({
  continentName,
  countryHandler,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useHomeStyles();

  const loadingState = useSelector(selectCountriesLoadingState);
  const countries = useSelector(selectCountriesDataName);

  const buttonClickHandler = () => {
    history.push('/');
    dispatch(clearCountryData());
    dispatch(clearCountriesName());
  };

  const activeStyleLink: React.CSSProperties = { fontWeight: 600, color: MAIN_BLUE };

  return (
    <Grid item xs>
      <Button onClick={buttonClickHandler} className={classes.buttonGoBack} variant="outlined">
        go back
      </Button>
      <Typography variant="h5" className={classes.countriesAllTitle}>
        countries - <span style={getColorStyle(continentName)}>{continentName}</span>
      </Typography>
      {!loadingState ? (
        <LoadingBlock size={60} marginTop={170} />
      ) : (
        countries.map(({ name }) => (
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
