import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCount } from '../../api/counter/fetchCount';

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);