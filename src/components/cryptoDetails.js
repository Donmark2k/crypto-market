import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const CryptoDetails = () => {
  const { id } = useParams();

  const countries = useSelector((state) => state.countries.countryList);
  const country = countries.find((c) => c.id === parseInt(id, 10));

  return (
    <Container>
      <Card bg="light" style={{ width: '100%', height: '100%', marginBottom: '24px' }}>
        <Card.Img
          variant="top"
          src={country.flag}
          alt="flag"
          style={{ width: 'auto', height: '250px' }}
        />
        <Card.Body>
          <Card.Title
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {country.country}
          </Card.Title>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <Card.Text style={{ fontSize: '16px' }}>
                <strong>Total Population:</strong>
                {' '}
                {country.population}
              </Card.Text>
              <Card.Text style={{ fontSize: '16px' }}>
                <strong>Total Population Tested:</strong>
                {' '}
                {country.tests}
              </Card.Text>
              <Card.Text style={{ fontSize: '16px' }}>
                <strong>Total Cases:</strong>
                {' '}
                {country.cases}
              </Card.Text>
              <Card.Text style={{ fontSize: '16px' }}>
                <strong>Recovered:</strong>
                {' '}
                {country.recovered}
              </Card.Text>
            </div>
            <div className="col-lg-6 col-sm-12">
              <Card.Text style={{ fontSize: '16px' }}>
                <strong>Deaths:</strong>
                {' '}
                {country.deaths}
              </Card.Text>
              <Card.Text style={{ fontSize: '16px' }}>
                <strong>Active Cases:</strong>
                {' '}
                {country.active}
              </Card.Text>
              <Card.Text style={{ fontSize: '16px' }}>
                <strong>Critical Cases:</strong>
                {' '}
                {country.critical}
              </Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CryptoDetails;
