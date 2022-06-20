import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import CriptoCoinsReducer from './CriptoCoins/CriptoCoins';

export default configureStore({
  reducer: {
    criptocoins: CriptoCoinsReducer,
  },

  middleware: [thunk, logger],
});
