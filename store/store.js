import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './themeSlice'; // Import the theme slice
import dataReducer from './productSlice';
const store = configureStore({
  reducer: {
    theme: themeReducer,
    data: dataReducer,
  },
});

export default store;
