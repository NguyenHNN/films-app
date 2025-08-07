// src/useFilmSelection.js
import { useState } from 'react';

export function useFilmSelection() {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (film) => {
    setSelectedFilm(film);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedFilm(null);
    setIsModalOpen(false);
  };

  return { selectedFilm, isModalOpen, openModal, closeModal };
}