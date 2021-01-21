import React from 'react';
import { Route } from 'react-router-dom';
import { CountriesAll } from '../../components/CountriesAll';

import { WorldMap } from '../../components/WorldMap';

import { useHomeStyles } from './theme';

export const Home: React.FC = (): React.ReactElement | null => {
  const classes = useHomeStyles();

  return (
    <>
      <Route exact path="/">
        <WorldMap classes={classes} />
      </Route>
      <Route path={['/countries/:continent', '/countries/:continent:country']}>
        <CountriesAll />
      </Route>
    </>
  );
};
