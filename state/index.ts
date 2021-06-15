import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { createWrapper } from "next-redux-wrapper";
import CatalogService from "../services/Rest/CatalogService";
import thunk from 'redux-thunk';

import { catalogReducer } from "./Catalog/reducers";
import * as catalogEpics from "./Catalog/epics";

// import Config from "appConfig";

export const rootReducer = combineReducers({
  catalog: catalogReducer,
});

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    CatalogService: new CatalogService({ baseURL: "https://dev-strapi-cms-ecommerce.test.telecom.com.ar" }),
  },
});

export const rootEpic = combineEpics(
  catalogEpics.loadProductListEpic,
);

const composeEnhancers =
  process.env.NODE_ENV === "development" ? composeWithDevTools({}) : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

const makeStore = () => store;

const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});

export default wrapper;
