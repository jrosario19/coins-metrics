
import fetchCoins from './CriptoCoinsApi';


const FETCH_COINS = 'coins-metrics/metrics/GET_COINS';
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS:
      return action.payload.map((coins) => ({
        ...coins,
      }));

    default:
      return state;
  }
};

export const fetchCoins = () => async (dispatch) => {
  const coins = await fetchCoins();
  dispatch({ type: GET_COINS, payload: coins });
};

export default reducer;