import React from 'react';
import './Footer.css'; // Assure-toi d'avoir un fichier CSS pour styliser le footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Adresse : 123 Rue de la République, 75000 Paris</p>
        <p>Téléphone : +33 1 23 45 67 89</p>
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
