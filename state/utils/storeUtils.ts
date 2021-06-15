/* eslint-disable no-prototype-builtins */
import { merge, isEqual } from 'lodash'
import { createSelectorCreator, defaultMemoize } from 'reselect'

/** Shortcut to create reducers, for readability */
export const createReducer = (initState, handlers) => {
  return (state = initState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
}

/** Shortcut to pass parameters into action */
export const forwardPayload = (actionType) => (payload) => ({ payload, type: actionType })

/** Shortcut to pass constant parameter to action or undefined */
export const staticPayload = (payload = undefined, actionType) => () => ({
  payload,
  type: actionType
})

/** Shortcut for no pass data into actions */
export const noPayload = (actionType) => staticPayload(undefined, actionType)

/** Shortcut for setting static vars into States */
export const mapToState = (map) => (state) => merge({}, state, map)

export const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual)
