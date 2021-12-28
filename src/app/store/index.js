import { configureStore } from '@reduxjs/toolkit'
import { blogApi } from '../../features/Blog/api'

const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogApi.middleware)
})

export default store