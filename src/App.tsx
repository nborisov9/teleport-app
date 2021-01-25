import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { CitiesAll } from './pages/CitiesAll';

import './app.scss';

// import { CitiesApi } from './services/api/citiesApi';

const App: React.FC = (): React.ReactElement => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/countries" component={Home} />
        <Route path="/citiesAll/:city" component={CitiesAll} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;

// console.log(CitiesApi.fetchCityImageData('Moscow'));
