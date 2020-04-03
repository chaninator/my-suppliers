import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import supplierReducer from '../reducers/supplierReducer'

export default combineReducers({
  form: formReducer,
  suppliers: supplierReducer
})
