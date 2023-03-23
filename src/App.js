import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import CryptoDetails from './components/cryptoDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crypto from './components/crypto';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Crypto />} />
        <Route path="/crypto/:name" element={<CryptoDetails />} />
      </Routes>
    </div>
  );
}

export default App;
