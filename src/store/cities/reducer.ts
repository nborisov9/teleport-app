const initialState = {
  items: [],
};

export const citiesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_CITIES': {
      return {
        ...state,
        items: action.payload,
      };
    }

    default:
      return state;
  }
};
