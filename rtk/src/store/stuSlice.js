import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '孙悟空',
  age: 18,
}
export const stuSlice = createSlice({
  name: 'stu',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload
    },
    setAge(state, action) {
      state.age = action.payload
    },
  },
})

export const { setName, setAge } = stuSlice.actions