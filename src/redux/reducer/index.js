import { createStore, applyMiddleware, combineReducers, compose } from "redux";

import { apiCall } from "../middleware";

import { applicationReducer } from "./application";
import { dataFetch } from "./dataFetch";

const reducers = combineReducers({
    dataFetch: dataFetch,
    application: applicationReducer
})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(apiCall),
  // other store enhancers if any
);

export const store = createStore(reducers, enhancer)