const Endpoint = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&page=1&price_change_percentage=24h&sparkline=true&order=market_cap_desc&per_page=10';



const getCriptoCoins = async () => {
  try {
    const response = await fetch(coinsEndpoint);
    const coins = await response.json();
    if (response.ok) {
      return coins;
    }
  } catch (error) {
    return error;
  }

  return false;
};


export default getCriptoCoins;