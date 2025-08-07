// src/components/FilmCard.jsx
import React from 'react';
import './FilmCard.css';

const FilmCard = ({ film, openModal }) => {
  return (
    <div className="film-card">
      <img src={film.image} alt={film.title} className="film-image" />
      <div className="film-details">
        <h3>{film.title}</h3>
        <p>Year: {film.year}</p>
        <p>Nation: {film.nation}</p>
        <button onClick={() => openModal(film)} className="detail-button">
          Details
        </button>
      </div>
    </div>
  );
};

export default FilmCard;