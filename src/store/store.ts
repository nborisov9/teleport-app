import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { CitiesState } from './cities/contracts/state';

import { rootReducer } from './rootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface RootState {
  cities: CitiesState;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
