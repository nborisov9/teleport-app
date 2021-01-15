import { TweetsActions } from './actionCreators';
import { CitiesActionsType } from './contracts/ActionTypes';
import { CitiesState, LoadingState } from './contracts/state';

const initialState: CitiesState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const citiesReducer = (state = initialState, action: TweetsActions) => {
  switch (action.type) {
    case CitiesActionsType.SET_CITIES: {
      return {
        ...state,
        items: action.payload,
        loadingState: LoadingState.LOADED,
      };
    }

    default:
      return state;
  }
};
