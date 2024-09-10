import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const fetchData = createAsyncThunk('data/fetch', async () => {
  const response = await axios.get('https://dummyjson.com/products');
  return response.data.products;
});
const dataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchData.pending, state => {
      state.loading = true;
    }),
      builder.addCase(fetchData.fulfilled, (state, action) => {
        (state.loading = false), (data = action.payload), (state.error = '');
      }),
      builder.addCase(fetchData.rejected, (state, action) => {
        (state.loading = false),
          (state.data = []),
          (state.error = action.error.message);
      });
  },
});

export default dataSlice.reducer;
