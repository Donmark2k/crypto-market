import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import cryptoReducer from './cryptos/cryptoSlice';

const logger = createLogger({
  // Options for the logger can be passed here
  // Show only the actions in the console
  predicate: (getState, action) => action.type !== 'SOME_ACTION',
  // Collapse the logs by default
  collapsed: true,
});

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
  applyMiddleware: [thunk, logger],
});

export default store;
