import React from 'react';
import { Route } from 'react-router-dom';

import { CountriesAll } from '../../components/CountriesAll';
import { WorldMap } from '../../components/WorldMap';

const Home: React.FC = () => (
  <>
    <Route exact path="/">
      <WorldMap />
    </Route>
    <Route path={['/countries/:continent', '/countries/:continent:country']}>
      <CountriesAll />
    </Route>
  </>
);

export default Home;
