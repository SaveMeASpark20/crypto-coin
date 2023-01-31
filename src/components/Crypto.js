import React, {useEffect, useState} from 'react'
import axios  from 'axios'
import { FiArrowDownLeft, FiArrowUpRight } from 'react-icons/fi'
import './Crypto.css'

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=6&page=1&sparkline=false';

const Crypto = () => {
  const [data, setData] = useState(null);

  useEffect( () => {
    axios.get(url).then((response) => {
      setData(response.data)
    }).catch(error => console.log(error))
  }, [] )

  if (!data) return null;
  console.log(data);
  return (
    <div className='crypto'>
        <div className='container'>
            <div className='coins-row'>
              {data.map( (coin) => 
              <div className='coins'>
                <img src={coin.image} alt='bitcoin'></img>
                <h5>{coin.name}</h5>
                <p className='coin-price'>&#8369; {coin.current_price.toFixed(2)}</p>
                {coin.price_change_percentage_24h < 0 ? (<span className='red'><FiArrowDownLeft/>{coin.price_change_percentage_24h.toFixed(2)}</span>) 
                : (<span className='green'><FiArrowUpRight/>{coin.price_change_percentage_24h.toFixed(2)}</span>)}
              </div>
              )}
            </div>
            <div className='description-row'>
              <div className=''>
                <h1>Cryptocurrencies News, Update and Prices</h1>
                <p>Stay informed on the latest news and trends in the digital currency world. Get expert insights and analysis to make informed investment decisions.</p>
                <button className=''>See More Coins</button>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Crypto