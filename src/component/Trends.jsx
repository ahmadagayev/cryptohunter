
import React, { useState, useEffect } from 'react';
import Trend from './Trend';
import axios from 'axios';
const Trends = () => {
    const [trendCoins, setTrendCoins] = useState([]);
    const [searchTrend, setSearchTrend] = useState('');
    useEffect(() => {
        axios
          .get(
            'https://api.coingecko.com/api/v3/search/trending'
          )
          .then(res => {
            setTrendCoins(res.data.coins);
            console.log(res.data.coins)
          })
          .catch(error => console.log(error));
      }, []);
      const handleChange = e => {
        setSearchTrend(e.target.value);
      };
      const filteredCoins = trendCoins.filter(coin =>
        coin.item.name.toLowerCase().includes(searchTrend.toLowerCase())
      );
      return (
        <div className='coin-app'>
          <div className='coin-search'>
            <h1 className='coin-text'>Search a currency</h1>
            <form>
              <input
                className='coin-input'
                type='text'
                onChange={handleChange}
                placeholder='Search'
              />
            </form>
          </div>
          {filteredCoins.map(coin => {
            return (
              <Trend
                key={coin.item.id}
                name={coin.item.name}
                price={coin.item.price_btc}
                symbol={coin.item.symbol}
                image={coin.item.small}
                marketcap={coin.item.market_cap_rank}
              />
            );
          })}
        </div>
      );
}

export default Trends