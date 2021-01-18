import React from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { CountriesAll } from '../../components/CountriesAll';

import { WorldMap } from '../../components/WorldMap';
import { fetchCountries } from '../../store/countries/actions';

import { useHomeStyles } from './theme';

export const Home: React.FC = (): React.ReactElement | null => {
  const dispatch = useDispatch();

  const classes = useHomeStyles();

  const handleClickContinent = (continent: string) => {
    dispatch(fetchCountries(continent));
  };

  return (
    <>
      <Route exact path="/">
        <WorldMap onClickContient={handleClickContinent} classes={classes} />
      </Route>
      <Route path="/countries/:continent">
        <CountriesAll classes={classes} />
      </Route>
    </>
  );
};
