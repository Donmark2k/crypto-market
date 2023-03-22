import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Countries from './components/country';
import CountryDetails from './components/countryDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:id" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
