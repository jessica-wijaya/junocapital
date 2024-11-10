import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import btc from '../../assets/btc.png';
import ena from '../../assets/ena.png';
import tao from '../../assets/tao.png';
import doge from '../../assets/doge.png';

const assets = [
  { name: 'Bitcoin', symbol: 'BTC', image: btc, link: 'https://bitcoin.org', coingeckoId: 'bitcoin' },
  { name: 'Ethena', symbol: 'ENA', image: ena, link: 'https://ethena.fi', coingeckoId: 'ethena' },
  { name: 'Bittensor', symbol: 'TAO', image: tao, link: 'https://bittensor.com', coingeckoId: 'bittensor' },
  { name: 'Dogecoin', symbol: 'DOGE', image: doge, link: 'https://dogecoin.com', coingeckoId: 'dogecoin' },
];

const Portfolio = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    // Build a comma-separated list of CoinGecko IDs
    const ids = assets.map(asset => asset.coingeckoId).join(',');

    // Fetch price data from CoinGecko
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`)
      .then(response => response.json())
      .then(data => {
        setPrices(data);
      })
      .catch(error => {
        console.error('Error fetching price data:', error);
      });
  }, []);

  return (
    <div className='portfolio'>
      <h1>Our Portfolio</h1>
      <div className='portfolio-box'>
        <div className='portfolio-container'>
          {assets.map((asset, index) => (
            <a href={asset.link} key={index} target='_blank' rel='noopener noreferrer' className='asset-card'>
              <img src={asset.image} alt={`${asset.name} logo`} className='asset-image' />
              <div className='asset-info'>
                <h2>{asset.name}</h2>
                <p>{asset.symbol}</p>
                <p className='asset-price'>
                  {prices[asset.coingeckoId]
                    ? `$${prices[asset.coingeckoId].usd.toLocaleString()}`
                    : 'Loading price...'}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
