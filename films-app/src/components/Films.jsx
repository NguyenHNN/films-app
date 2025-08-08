import React from 'react';
import { Container, Typography, Grid, Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FilmCard from './FilmCard';
import filmsData from '../ListOfFilms';
import { useFilmSelection } from '../useFilmSelection';

const Films = () => {
  const { selectedFilm, isModalOpen, openModal, closeModal } = useFilmSelection();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" sx={{ mb: 4, color: 'var(--text-color)', fontWeight: 700 }}>
        Danh sách phim
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {filmsData.map((film) => (
          <Grid item key={film.id} xs={12} sm={6} md={4}>
            <FilmCard film={film} openModal={openModal} />
          </Grid>
        ))}
      </Grid>
      <Modal open={isModalOpen} onClose={closeModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 600 },
            bgcolor: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '20px',
            boxShadow: '0 8px 32px var(--shadow-color)',
            p: 3,
          }}
        >
          <IconButton onClick={closeModal} sx={{ position: 'absolute', top: 8, right: 8 }}>
            <CloseIcon sx={{ color: 'var(--text-color)' }} />
          </IconButton>
          {selectedFilm && (
            <>
              <Typography variant="h5" sx={{ mb: 2, color: 'var(--text-color)' }}>
                {selectedFilm.title}
              </Typography>
              <Box sx={{ position: 'relative', paddingTop: '56.25%' /* 16:9 */ }}>
                <iframe
                  src={selectedFilm.clip}
                  title={selectedFilm.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '15px',
                  }}
                  allowFullScreen
                />
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default Films;