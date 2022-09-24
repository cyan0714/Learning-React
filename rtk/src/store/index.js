import { configureStore } from '@reduxjs/toolkit'
import { stuSlice } from './stuSlice'
import { schoolSlice } from './schoolSlice'

const store = configureStore({
  reducer: {
    student: stuSlice.reducer,
    school: schoolSlice.reducer
  },
})

export default store
