import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { ThemeContext } from './utils/ThemeContext';
import Header from './components/MainPage/Header';
import Countries from './pages/Countries';
import MyCities from './pages/MyCities';
import Footer from './components/MainPage/Footer';
import Wrapper from './components/MainPage/Wrapper';

import './app.scss';

const App: React.FC = (): React.ReactElement => {
  const [themeMode, setThemeMode] = React.useState<string>('light');
  const toggleThemeHandler = (theme: string) => setThemeMode(theme);

  return (
    <Provider store={store}>
      <Router>
        <ThemeContext.Provider value={{ themeMode, toggleThemeHandler }}>
          <Wrapper>
            <Header />
            <Switch>
              <Route exact path="/" component={Countries} />
              <Route path="/countries" component={Countries} />
              <Route path="/mycities/:city" component={MyCities} />
              <Redirect to="/" />
            </Switch>
            <Footer />
          </Wrapper>
        </ThemeContext.Provider>
      </Router>
    </Provider>
  );
};

export default App;
