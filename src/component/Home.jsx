import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src="https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860" alt='cardona' onDragStart={handleDragStart} />,
    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt='bitcoin' onDragStart={handleDragStart} />,
    <img src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" alt='etherium' onDragStart={handleDragStart} />,
    <img src="https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707" alt='tether' onDragStart={handleDragStart} />,
    <img src="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850" alt='bnb' onDragStart={handleDragStart} />,
    <img src="https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422" alt='solana' onDragStart={handleDragStart} />,
    <img src="https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644" alt='polkat' onDragStart={handleDragStart} />,
    <img src="https://assets.coingecko.com/coins/images/8284/large/luna1557227471663.png?1567147072" alt='luna' onDragStart={handleDragStart} />,
    <img src="https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389" alt='usd' onDragStart={handleDragStart} />,
    <img src="https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731" alt='xrp' onDragStart={handleDragStart} />,
];


const Home = () => {
    return (
        <div className='home-container'>
            <h1>Crypto Hunter</h1>
            <p>Get All The Info Regarding Your Favorite Crypto Currency</p>
            <div className='carousel'>

                <AliceCarousel 
                    autoPlay
                    infinite
                    autoPlayInterval={2000}
                    animationDuration={1000}
                    autoWidth 
                    disableDotsControls 
                    disableButtonsControls 
                    mouseTracking 
                    items={items} 
                />
            </div>


        </div>
    )
}


export default Home