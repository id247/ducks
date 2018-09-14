import { createStore, combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import mode from "../common/ducks/mode";
import { reducer as counter } from "../components/features/Counters";
import middlewares from "./middlewares";
import initialState from "./initialState";

const rootReducer = combineReducers({
  mode,
  counter,
  router: routerReducer
});

const store = createStore(rootReducer, initialState, middlewares);

export default store;
