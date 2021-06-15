import { merge, keyBy } from 'lodash'
import { createReducer, mapToState } from '../utils/storeUtils'
import * as types from './types'
import { HYDRATE } from 'next-redux-wrapper'
import { STORE_STATUS } from './enums'

/** Define the Base State for Catalog Module */
const baseState = {
  status: 'NOT_STARTED',
  productList: {
    page: 0,
    pagesCount: 0,
    pageSize: 0,
    items: {},
    hasError: false
  }
}

const hydrate = (state, action) => {
  if (action.payload.catalog.status !== STORE_STATUS.NOT_STARTED) {
    const newState = {
      ...state,
      ...action.payload.catalog
    }
    return newState
  } else {
    return state
  }
}

const loadProductListing = (state, action) => {
  return merge({}, {
    ...state,
    status: STORE_STATUS.LOAD_PRODUCTS_SUCCESS,
    productList: {
      page: action.payload.page,
      pagesCount: action.payload.pagesCount,
      pageSize: action.payload.pageSize,
      items: keyBy(action.payload.items, 'id'),
      hasError: action.payload.hasError
    },
    productDetail: {}
  })
}

const loadProductDetail = (state, action) => merge(state, {
  status: STORE_STATUS.LOAD_DETAIL_SUCCESS,
  productDetail: action.payload
})

const loadProductOffering = (state, action) => merge(state, {
  status: STORE_STATUS.LOAD_OFFERING_SUCCESS,
  productOffering: action.payload
})

const loadProductListingError = (state, action) => {
  return merge({}, {
    ...state,
    status: STORE_STATUS.LOAD_PRODUCTS_ERROR,
    productList: {
      page: action.payload.page,
      pagesCount: action.payload.pagesCount,
      pageSize: action.payload.pageSize,
      items: keyBy(action.payload.items, 'id'),
      hasError: action.payload.hasError
    }
  })
}

export const catalogReducer = createReducer(
  { ...baseState },
  {
    [HYDRATE]: hydrate,
    [types.LOAD_CATALOG_ACTION]: mapToState({
      status: STORE_STATUS.LOADING
    }),
    [types.LOAD_CATALOG_ACTION_COMPLETED]: loadProductListing,
    [types.LOAD_CATALOG_ACTION_FAILED]: loadProductListingError,
    [types.LOAD_DETAIL_ACTION]: mapToState({
      status: STORE_STATUS.LOADING
    }),
    [types.LOAD_DETAIL_ACTION_COMPLETED]: loadProductDetail,
    [types.LOAD_DETAIL_ACTION_FAILED]: mapToState({
      status: STORE_STATUS.LOAD_DETAIL_ERROR
    }),
    [types.LOAD_OFFERING_ACTION]: mapToState({
      status: STORE_STATUS.LOADING
    }),
    [types.LOAD_OFFERING_ACTION_COMPLETED]: loadProductOffering,
    [types.LOAD_OFFERING_ACTION_FAILED]: mapToState({
      status: STORE_STATUS.LOAD_OFFERING_ERROR
    })
  })
