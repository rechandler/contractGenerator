import { createSlice } from '@reduxjs/toolkit'

const createContractSlices = createSlice({
  name: 'createContract',
  initialState: {
    form: {},
  },
  reducers: {
    addCreateFormValues: (state, action) => {
      const payload = action.payload
      state.form = { ...state.form, ...payload }
    },
  },
})

// Extract the action creators object and the reducer
const { actions, reducer } = createContractSlices
// Extract and export each action creator by name
export const { addCreateFormValues } = actions
// Export the reducer, either as a default or named export
export default reducer
