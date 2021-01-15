import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { CitiesAll } from './pages/CitiesAll';

import './app.scss';

const App: React.FC = (): React.ReactElement => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/citiesAll" component={CitiesAll} />
      </Switch>
    </Router>
  );
};

export default App;
