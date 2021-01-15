import React from 'react';

import { Header } from './components/Header';
import { Home } from './pages/Home';

import './app.scss';

const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default App;
