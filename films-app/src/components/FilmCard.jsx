import React from 'react';
import { Link } from 'react-router-dom';
import './FilmCard.css';

const FilmCard = ({ film }) => {
  return (
    <div className="film-card">
      <img src={film.image} alt={film.title} className="film-image" />
      <div className="film-details">
        <h3>{film.title}</h3>
        <p>Year: {film.year}</p>
        <p>Nation: {film.nation}</p>
        <Link to={`/film/${film.id}`} className="detail-button">
          Chi tiết
        </Link>
      </div>
    </div>
  );
};

export default FilmCard;