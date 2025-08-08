import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const FilmCard = ({ film, openModal }) => {
  return (
    <Card
      sx={{
        width: 280,
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        borderRadius: '20px',
        boxShadow: '0 8px 32px var(--shadow-color)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-10px) scale(1.02)',
          boxShadow: '0 20px 40px var(--shadow-color)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="280"
        image={film.image}
        alt={film.title}
        sx={{
          objectFit: 'cover',
          borderRadius: '15px',
          margin: '15px',
          boxShadow: '0 8px 25px var(--shadow-color)',
          border: '3px solid var(--card-border)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      />
      <CardContent sx={{ textAlign: 'center', color: 'var(--text-color)' }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, minHeight: '2.6em' }}>
          {film.title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#FFD700', mb: 1 }}>
          Year: {film.year}
        </Typography>
        <Typography variant="body2" sx={{ color: '#87CEEB' }}>
          Nation: {film.nation}
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 1 }}>
          <Button
            variant="contained"
            component={Link}
            to={`/film/${film.id}`}
            sx={{
              borderRadius: '12px',
              background: 'linear-gradient(45deg, #3498db, #2980b9)',
              textTransform: 'none',
              boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px var(--shadow-color)',
              },
            }}
          >
            Chi tiết
          </Button>
          <Button
            variant="outlined"
            startIcon={<PlayCircleOutlineIcon />}
            onClick={() => openModal(film)}
            sx={{
              borderRadius: '12px',
              borderColor: 'var(--card-border)',
              color: 'var(--text-color)',
              textTransform: 'none',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px var(--shadow-color)',
              },
            }}
          >
            Xem clip
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FilmCard;