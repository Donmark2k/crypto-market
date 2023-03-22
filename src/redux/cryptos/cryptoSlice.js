/* eslint no-underscore-dangle: ["error", { "allow": ["country.countryInfo._id", "_id"] }] */
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
    const response = await axios.get(api);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    searchCrypto: (state, payload) => ({
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
          updated: coin.updated,
          country: coin.country,
          cases: coin.cases,
          tests: coin.tests,
          deaths: coin.deaths,
          population: coin.population,
          recovered: coin.recovered,
          active: coin.active,
          critical: coin.critical,
          id: coin.countryInfo._id,
          flag: coin.countryInfo.flag,
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
export const { searchCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
