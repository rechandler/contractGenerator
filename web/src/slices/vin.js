import { createSlice } from '@reduxjs/toolkit'

const vinFieldSlices = createSlice({
  name: 'vinFields',
  initialState: {
    vehicleValues: {}
  },
  reducers: {
    addVehicleValues: (state, action) => {
      const payload = action.payload;
      state.vehicleValues = {...state.vehicleValues, ...payload}
    }
  }
})

// Extract the action creators object and the reducer
const { actions, reducer } = vinFieldSlices
// Extract and export each action creator by name
export const { addVehicleValues } = actions
// Export the reducer, either as a default or named export
export default reducer
