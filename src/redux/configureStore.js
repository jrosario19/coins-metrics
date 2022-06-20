import CriptoCoinsReducer from './CriptoCoins/CriptoCoins';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';



export default configureStore({
  reducer: {
    coins: CriptoCoinsReducer,
  },

  middleware: [thunk, logger],
});