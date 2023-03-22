import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Countries from '../components/country';
import store from '../redux/store';

describe('Test for countryDetails', () => {
  test('should render', () => {
    const country = {
      id: 24,
      death: '1933',
      critical: '0',
      country: 'Angola',
      active: '23',
      cases: '105298',
      recovered: '103342',
      tests: '1499795',
    };
    const tree = renderer.create(
      <Provider store={store}>
        <Countries countries={country} key={24} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
