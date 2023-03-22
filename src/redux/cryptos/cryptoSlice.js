/* eslint no-underscore-dangle: ["error", { "allow": ["country.countryInfo._id", "_id"] }] */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://api.coinstats.app/public/v1/coins';

const initialState = {
  countryList: [],
  status: 'idle',
  error: null,
  search: '',
};

export const fetchCountries = createAsyncThunk('country/fetchCountries', async () => {
  try {
    const response = await axios.get(api);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    searchField: (state, payload) => ({
      ...state,
      search: payload.payload,
    }),
  },
  extraReducers(builder) {
    builder.addCase(fetchCountries.pending, (state) => ({
      ...state,
      status: 'loading',
    }))
      .addCase(fetchCountries.fulfilled, (state, action) => ({
        ...state,
        countryList: action.payload.map((country) => ({
          updated: country.updated,
          country: country.country,
          cases: country.cases,
          tests: country.tests,
          deaths: country.deaths,
          population: country.population,
          recovered: country.recovered,
          active: country.active,
          critical: country.critical,
          id: country.countryInfo._id,
          flag: country.countryInfo.flag,
        })),
        status: 'loaded',
      }))
      .addCase(fetchCountries.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },

});
export const { searchField } = countrySlice.actions;
export default countrySlice.reducer;
