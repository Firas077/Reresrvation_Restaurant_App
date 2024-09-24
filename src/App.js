import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';

const App = () => {
  return (
    <Router>
      <div>
        <Header /> {/* Header visible partout */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>

        <Footer /> {/* Footer visible partout */}
      </div>
    </Router>
  );
};

export default App;
