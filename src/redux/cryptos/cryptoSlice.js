import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://api.coinstats.app/public/v1/coins';

const initialState = {
  cryptoList: [],
  status: 'idle',
  error: null,
  search: '',
};
export const fetchCrypto = createAsyncThunk('crypto/fetchCrypto', async () => {
  try {
    const response = await axios.get(api, { responseType: 'json' });
    const data = await response.data.coins;
    return data;
  } catch (error) {
    return error.message;
  }
});

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    searchField: (state, payload) => ({
      ...state,
      search: payload.payload,
    }),
  },
  extraReducers(builder) {
    builder.addCase(fetchCrypto.pending, (state) => ({
      ...state,
      status: 'loading',
    }))
      .addCase(fetchCrypto.fulfilled, (state, action) => ({
        ...state,
        cryptoList: action.payload.map((coin) => ({
          id: coin.id,
          name: coin.name,
          image: coin.icon,
          rank: coin.rank,
          price: coin.price,
          cap: coin.marketCap,
          priceChangeH: coin.priceChange1h,
          priceChangeD: coin.priceChange1d,
          available: coin.availableSupply,
          total: coin.totalSupply,
          symbol: coin.symbol,
          website: coin.websiteUrl,
        })),
        status: 'loaded',
      }))
      .addCase(fetchCrypto.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },

});

export const { searchField } = cryptoSlice.actions;
export default cryptoSlice.reducer;
