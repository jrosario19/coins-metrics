import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const CriptoCoin = (props) => {
  const navigate = useNavigate();

  const {
    id,
    name,
    image,
    symbol,
  } = props;

  const onClickEventhandlerDetails = (id) => {
    navigate(`details/${id}`);
  };

  return (
    <>
      <div className="column-container">
        <div className="criptocoin-container">
          <img className="criptocoin-img" src={image} alt={name} />
          <button className="criptocoin-button" type="button" onClick={() => onClickEventhandlerDetails(id)}>-&gt;</button>
        </div>
        <div className="column-container">
          <div className="title-field">{name}</div>
          <div className="coin-symbol-field">{symbol}</div>
        </div>
      </div>
    </>
  );
};

CriptoCoin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default CriptoCoin;
