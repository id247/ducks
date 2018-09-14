import { createStore, combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import counter from "../common/ducks/counter";
import middlewares from "./middlewares";
import initialState from "./initialState";

const rootReducer = combineReducers({
  counter,
  router: routerReducer
});

const store = createStore(rootReducer, initialState, middlewares);

export default store;
