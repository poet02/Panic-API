import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { getPanicsReducer } from "./reducers/panicReducers";

const reducer = combineReducers({
  getPanics: getPanicsReducer,
});

const middleware = [thunk];

const INITIAL_STATE = {};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;