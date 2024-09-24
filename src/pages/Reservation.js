import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de traitement du formulaire
    console.log('Formulaire de réservation soumis :', formData);
  };

  return (
    <main className="reservation-page">
      <div className="reservation-header">
        <h1>Réservez une Table au Restaurant</h1>
        <h3>Profitez d'une expérience gastronomique unique en réservant dès maintenant.</h3>
      </div>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom complet"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date :</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Heure :</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="guests">Nombre de personnes :</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            max="20"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre adresse email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Téléphone :</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Votre numéro de téléphone"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Réserver
        </button>
      </form>
    </main>
  );
};

export default Reservation;
