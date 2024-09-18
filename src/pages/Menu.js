import React from 'react';
import './Menu.css';
import entreeImage from '../assets/entree.jpg';
import entreeImage2 from '../assets/entree2.jpg';
import mainCourseImage from '../assets/main_course.jpg';
import mainCourseImage2 from '../assets/main_course2.jpg';  
import dessertImage from '../assets/dessert.jpg'; 

const Menu = () => {
  return (
    <div className="menu">
      <h2>Notre Menu</h2>
      
      {/* Section Entrées */}
      <section className="menu-section">
        <h3>Entrées</h3>
        <div className="menu-items">
          <div className="menu-item">
            <img src={entreeImage} alt="Entrée 1" />
            <div className="item-info">
              <h4>Salade aux crevettes 1</h4>
              <p>Tomate,crevettes,carottes</p>
              <span className="price">12€</span>
            </div>
          </div>
          <div className="menu-item">
            <img src={entreeImage2} alt="Entrée 2" />
            <div className="item-info">
              <h4>Taboula Libanaise</h4>
              <p>Description de l'entrée 2.</p>
              <span className="price">10€</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Plats Principaux */}
      <section className="menu-section">
        <h3>Plats Principaux</h3>
        <div className="menu-items">
          <div className="menu-item">
            <img src={mainCourseImage} alt="Plat Principal 1" />
            <div className="item-info">
              <h4>Plat Principal 1</h4>
              <p>Description du plat principal 1.</p>
              <span className="price">18€</span>
            </div>
          </div>
          <div className="menu-item">
            <img src={mainCourseImage2} alt="Plat Principal 2" />
            <div className="item-info">
              <h4>Plat Principal 2</h4>
              <p>Description du plat principal 2.</p>
              <span className="price">20€</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Desserts */}
      <section className="menu-section">
        <h3>Desserts</h3>
        <div className="menu-items">
          <div className="menu-item">
            <img src={dessertImage} alt="Dessert 1" />
            <div className="item-info">
              <h4>Dessert 1</h4>
              <p>Description du dessert 1.</p>
              <span className="price">8€</span>
            </div>
          </div>
          <div className="menu-item">
            <img src={dessertImage} alt="Dessert 2" />
            <div className="item-info">
              <h4>Dessert 2</h4>
              <p>Description du dessert 2.</p>
              <span className="price">7€</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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



    </div>
  );
};

export default Menu;

