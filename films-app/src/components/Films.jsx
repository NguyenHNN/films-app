// src/components/Films.jsx
import React from 'react';
import FilmCard from './FilmCard';
import FilmModal from './FilmModal';
import filmsData from '../ListOfFilms';
import { useFilmSelection } from '../useFilmSelection';
import './Films.css';

const Films = () => {
  const { selectedFilm, isModalOpen, openModal, closeModal } = useFilmSelection();

  return (
    <div className="films-container">
      <h1>Danh sách phim</h1>
      <div className="films-grid">
        {filmsData.map((film) => (
          <FilmCard key={film.id} film={film} openModal={openModal} />
        ))}
      </div>
      <FilmModal film={selectedFilm} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Films;