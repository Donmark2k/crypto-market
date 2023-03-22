import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import store from '../redux/store';
import NavBar from '../components/navbar';
import App from '../App';

function MyFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div>
      <h2>Something went wrong:</h2>
      <p>{error.message}</p>
      <button type="button" onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

it('Navbar page renders correctly', () => {
  const tree = renderer
    .create(
      <React.StrictMode>
        <ErrorBoundary FallbackComponent={MyFallbackComponent}>
          <Provider store={store}>
            <BrowserRouter>
              <NavBar />
            </BrowserRouter>
          </Provider>
        </ErrorBoundary>
      </React.StrictMode>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('App  page renders correctly', () => {
  const tree = renderer
    .create(
      <React.StrictMode>
        <ErrorBoundary FallbackComponent={MyFallbackComponent}>
          <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Provider>
        </ErrorBoundary>
      </React.StrictMode>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
