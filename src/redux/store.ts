import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./reducer";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(String(localStorage.getItem("reduxState")))
  : [];

const store = createStore(reducer, persistedState, devToolsEnhancer({}));

export default store;
