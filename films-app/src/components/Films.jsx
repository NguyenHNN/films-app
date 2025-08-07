import React from 'react';
import FilmCard from './FilmCard';
import filmsData from '../ListOfFilms';
import './Films.css';

const Films = () => {
  return (
    <div className="films-container">
      <h1>Danh sách phim</h1>
      <div className="films-grid">
        {filmsData.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
};

export default Films;