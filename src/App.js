import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Crypto from './components/country';
import CryptoDetails from './components/countryDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crypto from './components/crypto';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<CryptoDetails />} />
        <Route path="/crypto/:name" element={<Crypto />} />
      </Routes>
    </div>
  );
}

export default App;
