import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './themeSlice'; // Import the theme slice

const store = configureStore({
  reducer: {
    theme: themeReducer, // Add the theme reducer
  },
});

export default store;
