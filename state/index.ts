import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { createWrapper } from "next-redux-wrapper";
import CatalogService from "../services/Rest/CatalogService";


import { catalogReducer } from "./Catalog/reducers";
import * as catalogEpics from "./Catalog/epics";

// import Config from "appConfig";

export const rootReducer = combineReducers({
  catalog: catalogReducer,
});


export const rootEpic = combineEpics(
  catalogEpics.loadProductListEpic,

)

const composeEnhancers =
  process.env.NODE_ENV === 'development' ? composeWithDevTools({}) : compose

const makeStore = () => {
  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      CatalogService: new CatalogService({ baseURL: "https://dev-strapi-cms-ecommerce.test.telecom.com.ar" }),

    }
  })

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  )

  epicMiddleware.run(rootEpic)

  return store
}

const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production'
})

export default wrapper

