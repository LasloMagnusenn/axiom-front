import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import React from 'react';
import Safe  from './pages/safe';
import Home  from './pages/home';
import Swap  from './pages/swap';
import Dashboard  from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/strategies/btcdao" element={<Safe/>} />
          <Route path="/strategies/altporfoliodao" element={<Safe/>} />
          <Route path="/strategies/ultrdao" element={<Safe/>} />
          <Route path="/strategies/airdropdao" element={<Safe/>} />
          <Route path="/strategies/safedao" element={<Safe/>} />
          <Route path="/strategies/btcdao/swap" element={<Swap/>} />
          <Route path="/strategies/altporfoliodao/swap" element={<Swap/>} />
          <Route path="/strategies/ultrdao/swap" element={<Swap/>} />
          <Route path="/strategies/airdropdao/swap" element={<Swap/>} />
          <Route path="/strategies/safedao/swap" element={<Swap/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
