import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import bookSlice from './bookSlice';
import blogSlice from './blogSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    book: bookSlice,
    blog : blogSlice
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
});

export default store;