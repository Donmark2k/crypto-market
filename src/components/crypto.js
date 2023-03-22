import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { fetchCrypto } from '../redux/cryptos/cryptoSlice';

const Crypto = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.crypto.status);
  const coins = useSelector((state) => state.crypto.cryptoList);
  console.log('kAI', coins, 'Onyeka');
  const searchCrypto = useSelector((state) => state.crypto.search);

  const displayCoins = () => {
    if (searchCrypto === undefined) {
      return coins;
    }

    // const filtered = coins.filter(
    //   (coin) => coin.coin.toLowerCase().includes(searchCrypto.toLowerCase()),
    // );
    // const filtered = coins.filter(
    //   (coin) => coin.coin.toLowerCase().includes(searchCrypto?.toLowerCase() ?? ''),
    // );
    // const filtered = coins.filter(
    //   (coin) => coin.coin.toLowerCase().includes((searchCrypto || '').toLowerCase()),
    // );
    const filtered = coins.filter(
      (coin) => coin?.coin?.toLowerCase().includes(searchCrypto?.toLowerCase()),
    );
    
    
    return filtered;
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCrypto());
    }
  }, [status, dispatch]);
  return (
    <Container style={{ display: 'block', margin: 'auto', width: '95%' }}>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        {displayCoins().map((coin) => (
          <Card
            key={coin.id}
            bg="light"
            style={{ width: '10rem', height: '12rem', margin: '4px' }}
          >
            <Link
              to={`/country/${coin.name}`}
              style={{ width: '100%', height: '100%' }}
            >
              <Button
                style={{ width: '4rem', border: 'none', background: 'none' }}
                className="see-more"
                variant="primary"
              >
                <BsArrowRightCircle
                  style={{
                    color: '#0290FF',
                    height: '20px',
                    width: '20px',
                    cursor: 'pointer',
                    transition: 'all ease-in 300ms',
                    marginLeft: '250%',
                  }}
                />
              </Button>
            </Link>
            <Card.Img
              variant="top"
              src={coin.image}
              alt="flag"
              style={{
                width: '8.3rem',
                opacity: '0.5',
                padding: 'auto',
                height: '4rem',
              }}
            />
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: '14px',
                  color: '#0290FF',
                  fontWeight: 'bold',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                {coin.price}
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: '12px',
                  color: '#000000',
                  fontWeight: 'bold',
                  width: '100%',
                  textAlign: 'right',
                }}
              >
                {coin.price}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Crypto;
