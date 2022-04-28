import React from 'react'

const Trend = ({
    name,
    price,
    symbol,
    marketcap,
    image,
  }) => {
    return (
        <div className='coin-container'>
          <div className='coin-row'>
            <div className='coin'>
              <img src={image} alt='crypto' />
              <h1>{name}</h1>
              <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='coin-data'>
              <p className='coin-price'>${price}</p>
              <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
            </div>
          </div>
        </div>
      );
}

export default Trend