import criptoCoinsReducer from '../redux/CriptoCoins/CriptoCoins';

describe('Cripto Coins Reducer tests', () => {
  it('Return the initial state', () => {
    expect(criptoCoinsReducer(undefined, {})).toBeTruthy();
  });

  it('Handle FETCH_COINS', () => {
    expect(
      criptoCoinsReducer(undefined, {
        type: 'FETCH_COINS',
      }),
    ).toBeTruthy();
  });
});
