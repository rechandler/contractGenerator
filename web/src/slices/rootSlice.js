import { combineReducers } from '@reduxjs/toolkit'
import vehicleForm from './vin'
import createContract from './createContract'
import createFormBuilder from './formBuilder'

export default combineReducers({
  vehicleForm,
  createContract,
  createFormBuilder,
})
