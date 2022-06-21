import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import CriptoCoin from './CriptoCoin';
import { fetchCriptoCoins } from '../redux/CriptoCoins/CriptoCoins';

const CriptoCoinsList = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const criptocoins = useSelector((state) => state.criptocoins);

  useEffect(() => {
    if (!criptocoins.lenght) {
      dispatch(fetchCriptoCoins());
    }
  }, [dispatch]);

  const filteredCoins = criptocoins.filter((criptocoin) => criptocoin.name
    .toLowerCase().includes(search.toLocaleLowerCase()));

  return (
    <>
      <div className="container-input">
        <input className="input-field" type="text" placeholder="Search Coin" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <ul className="container criptocoins-list">
        {filteredCoins.map((coin) => (
          <li key={coin.id} className="criptocoins-item">
            <CriptoCoin
              id={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CriptoCoinsList;
