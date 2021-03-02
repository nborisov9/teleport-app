import React from 'react';
import { Route } from 'react-router-dom';

import { CountriesAll } from '../../components/CountriesPage/CountriesAll';
import { WorldMap } from '../../components/CountriesPage/WorldMap';

const Home: React.FC = () => (
  <>
    <Route exact path="/">
      <WorldMap />
    </Route>
    <Route path={['/countries/:continent/:country', '/countries/:continent/']}>
      <CountriesAll />
    </Route>
  </>
);

export default Home;
