import * as types from './types'
import suppliers from '../api/suppliers'
import history from '../history'

export const addSupplier = formValues => async dispatch => {
  const response = await suppliers.post('/suppliers', { ...formValues })

  dispatch({ type: types.ADD_SUPPLIER, payload: response.data })
  history.push('/')
}

export const fetchSuppliers = () => async dispatch => {
  const response = await suppliers.get('/suppliers')

  dispatch({ type: types.FETCH_SUPPLIERS, payload: response.data })
}

export const fetchSupplier = id => async dispatch => {
  const response = await suppliers.get(`/suppliers/${id}`)

  dispatch({ type: types.FETCH_SUPPLIER, payload: response.data })
}

export const editSupplier = (id, formValues) => async dispatch => {
  const response = await suppliers.patch(`/suppliers/${id}`, formValues)

  dispatch({ type: types.EDIT_SUPPLIER, payload: response.data })
  history.push('/')
}

export const deleteSupplier = id => async dispatch => {
  await suppliers.delete(`/suppliers/${id}`)

  dispatch({ type: types.DELETE_SUPPLIER, payload: id })
  history.push('/')
}
