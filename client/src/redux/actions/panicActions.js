import * as actionTypes from "../constants/panicConstants";
import axios from "axios";


export const getPanics = () => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_PANICS_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get("/api/panic");

      dispatch({
        type: actionTypes.GET_PANICS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_PANICS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
