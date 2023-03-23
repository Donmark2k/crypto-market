import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const CryptoDetails = () => {
  const { name } = useParams();
  const coins = useSelector((state) => state.crypto.cryptoList);
  const coin = coins.find((c) => c.name === (name));
  console.log(name);
  console.log(coin, name);

  return (
    <Container style={{ backgroundColor: 'rgb(23, 33, 53)', width: '100%', height: '100%', padding: '1rem' }}>
      <Card style={{
        backgroundColor: 'rgba(17, 63, 154, 0.3)',
        width: '90%',
        height: '100%',
        fontSize: '18px',
        display: 'block',
        margin: '0 auto',
        fontWeight: '600',
        fontFamily: 'san-serif',
        color: '#fff',
        padding: '6px',
        borderRadius: '18px'
      }}
      >
        <Card.Title style={{
          fontSize: '28px',
          color: '#0290FF',
          fontWeight: 'bold',
          textAlign: 'center',
          padding: '12px',
        }}
        >

          {coin.name}
        </Card.Title>
        <Card.Img
          variant="top"
          src={coin.image}
          alt="flag"
          style={{
            width: '60px', height: '60px', display: 'block', margin: '0 auto',
          }}
        />
        <Card.Body>
          <Card.Title
            style={{
              fontSize: '12px',
              fontWeight: '900',
              textAlign: 'center',
              padding: '0',
              margin: '0',
            }}
          >

            {coin.symbol}
          </Card.Title>
          <Card.Text>
            <strong> Price:</strong>
            {' '}
            $
            {Math.ceil(coin.price)}
          </Card.Text>
          <Card.Text>
            <strong> Market Cap:</strong>
            {' '}
            $
            {Math.ceil(coin.cap)}
          </Card.Text>
          <Card.Text>
            <strong>Hourly Price Change:</strong>
            {' '}
            {coin.priceChangeH}
            %
          </Card.Text>
          <Card.Text>
            <strong>Daily Price Change:</strong>
            {' '}
            {coin.priceChangeD}
            %
          </Card.Text>
          <Card.Text>
            <strong>Circulating Supply:</strong>
            {' '}
            {coin.total}
          </Card.Text>
          <Card.Text>
            <strong> Available Quantity:</strong>
            {' '}
            {coin.available}
          </Card.Text>
          <Card.Text>
            <strong>
            {' '}
            <a href={coin.website}> Click Here to visit their website</a>
            </strong>
            
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CryptoDetails;
