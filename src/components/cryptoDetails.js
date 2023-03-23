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
    <Container style={{
      backgroundColor: 'gray', width: '100%', height: '100%' }}
    >
      <Card style={{
        backgroundColor: 'white', width: '90%', height: '100%', fontSize: '18px', display: 'block', margin: '0 auto',fontWeight : '600',
        fontFamily: 'san-serif',
        color: '#800000'
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
          <Card.Text >
            <strong> Price:</strong>
            {' '}
            ${Math.ceil(coin.price)}
          </Card.Text>
          <Card.Text >
            <strong> Market Cap:</strong>
            {' '}
            ${Math.ceil(coin.cap)}
          </Card.Text>
          <Card.Text>
            <strong>Hourly Price Change:</strong>
            {' '}
            {coin.priceChangeH}
            %
          </Card.Text>
          <Card.Text >
            <strong>Daily Price Change:</strong>
            {' '}
            {coin.priceChangeD}%
          </Card.Text>
          <Card.Text>
            <strong>Quantity in Circulation:</strong>
            {' '}
            {coin.total}
          </Card.Text>
          <Card.Text>
            <strong> Available Quantity:</strong>
            {' '}
            {coin.available}
          </Card.Text>
          <Card.Text>
            <strong>Visit our website at: </strong>
            {' '}
            {coin.website}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CryptoDetails;
