import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';
import Header from './components/Header';
import Home from './pages/Home';
import CitiesAll from './pages/CitiesAll';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

import './app.scss';

const App: React.FC = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <Router>
        <Wrapper>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/countries" component={Home} />
            <Route path="/citiesAll/:city" component={CitiesAll} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Wrapper>
      </Router>
    </Provider>
  );
};

export default App;
