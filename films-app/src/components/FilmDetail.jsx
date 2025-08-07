import React from 'react';
import { useParams, Link } from 'react-router-dom';
import filmsData from '../ListOfFilms';
import './FilmDetail.css';

const FilmDetail = () => {
  const { id } = useParams();
  const film = filmsData.find((film) => film.id === parseInt(id));

  if (!film) {
    return (
      <div className="film-detail-container">
        <h2 className="film-detail-title">Phim không tồn tại</h2>
        <Link to="/" className="back-button">Quay lại danh sách phim</Link>
      </div>
    );
  }

  return (
    <div className="film-detail-container">
      <img src={film.image} alt={film.title} className="film-detail-image" />
      <h2 className="film-detail-title">{film.title}</h2>
      <p className="film-detail-description">{film.description}</p>
      <p className="film-detail-info">Năm: {film.year}</p>
      <p className="film-detail-info">Quốc gia: {film.nation}</p>
      <p className="film-detail-info">Thể loại: {film.genre}</p>
      <Link to="/" className="back-button">Quay lại danh sách phim</Link>
    </div>
  );
};

export default FilmDetail;