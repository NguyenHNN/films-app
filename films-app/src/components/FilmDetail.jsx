import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, CardMedia, CardContent, Typography, Button, Collapse, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import filmsData from '../ListOfFilms';

const FilmDetail = () => {
  const { id } = useParams();
  const film = filmsData.find((film) => film.id === parseInt(id));
  const [expanded, setExpanded] = useState(false);

  if (!film) {
    return (
      <Container maxWidth="sm" sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h5" color="var(--text-color)">
          Phim không tồn tại
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/"
          sx={{
            mt: 2,
            borderRadius: '12px',
            background: 'linear-gradient(45deg, #3498db, #2980b9)',
            textTransform: 'none',
          }}
        >
          Quay lại danh sách phim
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Card
        sx={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          borderRadius: '20px',
          boxShadow: '0 8px 32px var(--shadow-color)',
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={film.image}
          alt={film.title}
          sx={{ borderRadius: '15px', m: 2 }}
        />
        <CardContent sx={{ color: 'var(--text-color)' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            {film.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Năm: {film.year}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Quốc gia: {film.nation}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Thể loại: {film.genre}
          </Typography>
          <Button
            variant="outlined"
            endIcon={<ExpandMoreIcon />}
            onClick={() => setExpanded(!expanded)}
            sx={{
              mb: 2,
              borderColor: 'var(--card-border)',
              color: 'var(--text-color)',
              textTransform: 'none',
            }}
          >
            {expanded ? 'Ẩn mô tả' : 'Xem mô tả'}
          </Button>
          <Collapse in={expanded}>
            <Typography variant="body2">{film.description}</Typography>
          </Collapse>
          <Button
            variant="contained"
            component={Link}
            to="/"
            sx={{
              mt: 2,
              borderRadius: '12px',
              background: 'linear-gradient(45deg, #3498db, #2980b9)',
              textTransform: 'none',
            }}
          >
            Quay lại danh sách phim
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FilmDetail;