// src/components/FilmModal.jsx
import React from 'react';
import './FilmModal.css';

const FilmModal = ({ film, isOpen, onClose }) => {
  if (!isOpen || !film) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={film.image} alt={film.title} className="modal-image" />
        <h2 className="modal-title">{film.title}</h2>
        <p className="modal-description">{film.description}</p>
        <p className="modal-detail">Năm: {film.year}</p>
        <p className="modal-detail">Quốc gia: {film.nation}</p>
        <p className="modal-detail">Thể loại: {film.genre}</p>
        <button onClick={onClose} className="modal-close-button">
          Đóng
        </button>
      </div>
    </div>
  );
};

export default FilmModal;