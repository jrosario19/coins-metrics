import getCriptoCoins from './CriptoCoinsApi';

const FETCH_COINS = 'criptocoins-metrics/metrics/FETCH_COINS';
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

export const fetchCriptoCoins = () => async (dispatch) => {
  const coins = await getCriptoCoins();

  dispatch({ type: FETCH_COINS, payload: coins });
};

export default reducer;
