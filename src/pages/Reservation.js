import React from 'react';
import './Reservation.css';

const Reservation = () => {
  return (
    <div className="reservation">
      <h2>Réservez une Table</h2>
      <form>
        <label>Nom:
          <input type="text" name="name" />
        </label>
        <label>Date:
          <input type="date" name="date" />
        </label>
        <label>Heure:
          <input type="time" name="time" />
        </label>
        <label>Nombre de personnes:
          <input type="number" name="guests" />
        </label>
        <button type="submit">Réserver</button>
      </form>
    </div>
  );
};

export default Reservation;
