
import getCriptoCoins from './CriptoCoinsApi';


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



export const getCriptoCoins = () => async (dispatch) => {
  const coins = await getCriptoCoins();

  dispatch({ type: FETCH_COINS, payload: coins });
};

export default reducer;