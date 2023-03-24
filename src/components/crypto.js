import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { fetchCrypto } from '../redux/cryptos/cryptoSlice';
import '../App.css';

const Crypto = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.crypto.status);
  const coins = useSelector((state) => state.crypto.cryptoList);
  console.log('kAI', coins, 'Onyeka');
  const searchField = useSelector((state) => state.crypto.search);
console.log(searchField);
  const displayCoins = () => {
    if (searchField === '' || undefined) {
      return coins;
    }

    const filtered = coins.filter(
      (coin) => coin.id.toLowerCase().includes(searchField.toLowerCase()),
    );

  return filtered;
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCrypto());
    }
  }, [status, dispatch]);
  console.log(displayCoins(), 'Friday')
  return (
    <>
        <p style={{ fontSize: '150%', color: 'rgba(17, 63, 154, 0.7)', textAlign: 'center',  margin: '0 auto', fontWeight: '700'}} >  Data from coinstats </p>
    <section className="crypto-Container">
      {displayCoins().map((coin) => (
        <div className="coinCard" key={coin.id}>
          <div style={{
            height: '18px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '4px', width: '100%',
          }}
          >
            <p style={{ fontSize: '12px', color: 'gray', fontWeight: '700' }}>
              {' '}
              RANK:
              { ' '}
              {' '}
              {coin.rank}
              {' '}
            </p>

            <Link to={`/crypto/${coin.name}`}>
              <BsArrowRightCircle
                style={{
                  color: '#0290FF',
                  height: '18px',
                  width: '12px',
                  padding: '0',
                  margin: '0',
                }}
              />
            </Link>
          </div>
          <div className="symbolD">
            <div className="imageDiv">
              <img alt="coin" src={coin.image} className="cardImage" />

            </div>
            <div className="nameCap">
              <div className="firstRow">
                <p>
                  {' '}
                  {coin.name}
                  {' '}
                </p>
                <p>
                  {' '}
                  $
                  {Math.ceil(coin.price)}
                </p>
              </div>

              <div className="secondRow">
                <p>
                  {' '}
                  {coin.symbol}
                  {' '}
                </p>
                <p>
                  {' '}
                  {coin.priceChangeD}
                  %
                  {' '}
                </p>
              </div>
            </div>

          </div>

        </div>
      ))}
    </section>
    </>
  );
};

export default Crypto;
