import * as actionTypes from "../constants/panicConstants";

export const getPanicsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_PANICS_REQUEST:
      return {...state}
    case actionTypes.GET_PANICS_SUCCESS:
      return {
        // ...state,
        panics: action.payload,
      };
    case actionTypes.GET_PANICS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};