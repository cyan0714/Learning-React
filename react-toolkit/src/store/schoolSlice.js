import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '府城中学',
  address: '高登街',
}
export const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload
    },
    setAddress(state, action) {
      state.address = action.payload
    },
  },
})

export const { setName, setAddress } = schoolSlice.actions