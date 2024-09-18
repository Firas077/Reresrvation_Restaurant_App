import React from 'react';
import './Home.css';
import restaurantImage1 from '../assets/restaurant1.jpg'; 
import restaurantImage2 from '../assets/restaurant2.jpg';
import restaurantImage3 from '../assets/restaurant3.jpg';
import restaurantImage4 from '../assets/restaurant4.jpg';
import restaurantImage5 from '../assets/restaurant5.jpg';
import restaurantImage6 from '../assets/restaurant6.jpeg';
import celebrityimage1 from '../assets/Célébrité1.jpg';
import celebrityimage2 from '../assets/Célébrité2.jpg';
import celebrityimage3 from '../assets/Célébrité3.jpg';
import celebrityimage4 from '../assets/Célébrité4.png';



const Home = () => {
  return (
    <div className="home">
      {/* Section d'introduction */}
      <section className="intro">
        <h2>Bienvenue à Restaurant El Padrino</h2>
        <p>
          Venez découvrir nos délicieux plats dans une ambiance conviviale et chaleureuse. Notre restaurant propose une cuisine raffinée et locale pour une expérience inoubliable.
        </p>
      </section>

      {/* Section des images du restaurant */}
      <section className="gallery">
        <h3>Notre Restaurant en Images</h3>
        <div className="image-grid">
          <img src={restaurantImage1} alt="Restaurant Image 1" />
          <img src={restaurantImage2} alt="Restaurant Image 2" />
          <img src={restaurantImage3} alt="Restaurant Image 3" />
          <img src={restaurantImage4} alt="Restaurant Image 4" />
          <img src={restaurantImage5} alt="Restaurant Image 5" />
          <img src={restaurantImage6} alt="Restaurant Image 6" />
        </div>
      </section>

      {/* Section avec plus d'informations sur le restaurant */}
      <section className="info">
        <h3>À propos de nous</h3>
        <p>
          Le Restaurant El Padrino vous accueille dans un cadre moderne et élégant. Venez profiter d'une cuisine savoureuse, préparée avec des ingrédients frais et de qualité. Nous proposons des plats variés qui raviront vos papilles, le tout dans une ambiance chaleureuse et accueillante.
        </p>
        <p>
          Que ce soit pour un dîner romantique, une sortie entre amis, ou un repas d'affaires, notre équipe se fera un plaisir de vous offrir un service exceptionnel. Réservez une table dès maintenant pour vivre une expérience culinaire inoubliable.
        </p>
      </section>

      <section className="info2">
        <h3>Nos Show-off Célébrité</h3>
        <div className="celebrity-gallery">
            <img src={celebrityimage1} alt="Célébrité 1" />
            <img src={celebrityimage2} alt="Célébrité 2" />
            <img src={celebrityimage3} alt="Célébrité 3" />
            <img src={celebrityimage4} alt="Célébrité 4" />
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

export default Home;
