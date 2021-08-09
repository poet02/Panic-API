import * as actionTypes from "../constants/panicConstants";

export const getPanicsReducer = (state = { panics: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PANICS_REQUEST:
      return {
        loading: true,
        panics: [],
      };
    case actionTypes.GET_PANICS_SUCCESS:
      return {
        panics: action.payload,
        loading: false,
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