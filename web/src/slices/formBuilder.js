import { createSlice } from '@reduxjs/toolkit'

const createFormBuilderSlice = createSlice({
  name: 'createFormBuilder',
  initialState: {
    formBuilder: [],
  },
  reducers: {
    addFormBuilderValues: (state, action) => {
      const payload = action.payload
      state.formBuilder = [...payload]
    },
  },
})

// Extract the action creators object and the reducer
const { actions, reducer } = createFormBuilderSlice
// Extract and export each action creator by name
export const { addFormBuilderValues } = actions
// Export the reducer, either as a default or named export
export default reducer
