import React from 'react';
import { Button, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectCountriesData, selectCountriesLoadingState } from '../../store/countries/selectors';

import { useHomeStyles } from '../../pages/Home/theme';
import { clearCountries } from '../../store/countries/actions';
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

  if (!countries) {
    return null;
  }

  return (
    <Container className={classes.countriesAllContainer} maxWidth="lg">
      <Button onClick={buttonClickHandler} className={classes.buttonGoBack} variant="outlined">
        go back
      </Button>
      {!loadingState ? (
        <LoadingBlock size={60} />
      ) : (
        countries.map(({ name, href }, index) => (
          <div className={classes.countriesNames} key={index + name}>
            {name}
          </div>
        ))
      )}
    </Container>
  );
};
