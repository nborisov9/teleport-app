import React from 'react';
import { Button, CircularProgress, Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectCountriesData, selectCountriesLoadingState } from '../../store/countries/selectors';

import { useHomeStyles } from '../../pages/Home/theme';

interface CountriesAllProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const CountriesAll: React.FC<CountriesAllProps> = ({
  classes,
}): React.ReactElement | null => {
  const history = useHistory();

  const countries = useSelector(selectCountriesData);
  const loadingState = useSelector(selectCountriesLoadingState);

  const changeHistoryHandler = () => {
    history.goBack();
  };

  if (!countries) {
    return null;
  }

  return (
    <Container className={classes.countriesAllContainer} maxWidth="lg">
      <Button onClick={changeHistoryHandler} className={classes.buttonGoBack} variant="outlined">
        go back
      </Button>
      {!loadingState ? (
        <CircularProgress size={60} disableShrink />
      ) : (
        countries.map(({ name }, index) => (
          <div className={classes.countriesNames} key={index + name}>
            {name}
          </div>
        ))
      )}
    </Container>
  );
};
