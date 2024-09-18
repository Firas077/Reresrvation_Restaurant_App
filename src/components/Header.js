import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Les styles pour le header
import logo from '../assets/logo.png'; // Assure-toi que le chemin est correct pour ton logo

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo du restaurant" className="logo-image" /> {/* Affiche le logo */}
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservation">Réservation</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
