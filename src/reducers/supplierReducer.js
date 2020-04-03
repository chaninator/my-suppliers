import _ from 'lodash'
import * as types from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_SUPPLIERS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    case types.FETCH_SUPPLIER:
      return { ...state, [action.payload.id]: action.payload }
    case types.ADD_SUPPLIER:
      return { ...state, [action.payload.id]: action.payload }
    case types.EDIT_SUPPLIER:
      return { ...state, [action.payload.id]: action.payload }
    case types.DELETE_SUPPLIER:
      return _.omit(state, action.payload)
    default:
      return state
  }
}
