import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchCriptoCoins } from '../redux/CriptoCoins/CriptoCoins';

const DetailsPage = () => {
  let criptocoin;
  const { coin_id: coinId } = useParams();
  const dispatch = useDispatch();
  const criptocoins = useSelector((state) => state.criptocoins);

  useEffect(() => {
    if (!criptocoins.length) {
      dispatch(fetchCriptoCoins());
    }
  }, [dispatch]);

  if (criptocoins[0]) {
    criptocoin = criptocoins.find((criptocoin) => criptocoin.id === coinId);
  }

  return (
    <>

      <h1 className="details-headline">CRIPTO COIN STATISTICS</h1>
      <div className="column-container-price">
        <div className="criptocoin-container-detail">
          <img className="criptocoin-img-details" src={criptocoin?.image || criptocoins[0]?.image} alt={criptocoin?.name || criptocoins[0]?.name} />
          <div className="column-container-details">
            <div>
              <span className="details-name1">Name:</span>
              <span className="name-data1">{criptocoin?.name || criptocoins[0]?.name}</span>
            </div>

            <div>
              <span className="details-name1">Symbol:</span>
              <span className="name-data1">{criptocoin?.symbol || criptocoins[0]?.symbol}</span>
            </div>

            <div>
              <span className="details-name1">Ranking:</span>
              <span className="name-data1">{criptocoin?.market_cap_rank || criptocoins[0]?.market_cap_rank}</span>
            </div>
          </div>
        </div>
        <div className="metadata-container">
          <span className="details-name">Price:</span>
          <span className="name-data">{criptocoin?.current_price || criptocoins[0]?.current_price}</span>
          <span className="details-name">Change %:</span>
          <span className={criptocoin?.price_change_percentage_24h > 0 ? 'price-up' : 'price-down'}>{criptocoin?.price_change_percentage_24h || criptocoins[0]?.price_change_percentage_24h}</span>
        </div>
      </div>

    </>

  );
};

export default DetailsPage;
