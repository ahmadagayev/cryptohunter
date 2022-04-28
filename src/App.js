import React, { useState, useEffect } from 'react';
import './App.css';
import Body from './component/Body';
import Home from './component/Home';
import Navbar from './component/Navbar';
import axios from 'axios';
import Trends from './component/Trends';
import { Routes,Route } from 'react-router-dom';


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return(
    <div className='app'>
      <Routes>
        <Route path="/cryptohunter" element={
          <>
            <Navbar/>
            <Home filteredCoins={filteredCoins}/>
            <Body filteredCoins={filteredCoins} handleChange={handleChange}/>
          </>
        }/>
        <Route path="/trends" element={
          <>
            <Navbar/>
            <Trends/>
          </>
        }/>
      </Routes>
      
    </div>
    
  )
}

export default App;
