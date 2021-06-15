import { forwardPayload } from '../utils/storeUtils'
import * as types from './types'

/** Actions to Load Catalog and Handle States */
export const loadCatalogAction = forwardPayload(types.LOAD_CATALOG_ACTION)
export const loadCatalogActionCompleted = forwardPayload(types.LOAD_CATALOG_ACTION_COMPLETED)
export const loadCatalogActionFailed = forwardPayload(types.LOAD_CATALOG_ACTION_FAILED)

/** Actions to load product detail */
export const loadProductDetailAction = forwardPayload(types.LOAD_DETAIL_ACTION)
export const loadProductDetailActionCompleted = forwardPayload(types.LOAD_DETAIL_ACTION_COMPLETED)
export const loadProductDetailActionFailed = forwardPayload(types.LOAD_DETAIL_ACTION_FAILED)

/** Actions to load product offering */
export const loadProductOfferingAction = forwardPayload(types.LOAD_OFFERING_ACTION)
export const loadProductOfferingActionCompleted = forwardPayload(types.LOAD_OFFERING_ACTION_COMPLETED)
export const loadProductOfferingActionFailed = forwardPayload(types.LOAD_OFFERING_ACTION_FAILED)
