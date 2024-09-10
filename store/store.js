import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import dataReducer from './productSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    data: dataReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Disables the middleware
      immutableCheck: false, // Disables immutability checks (optional)
    }),
});

export default store;
