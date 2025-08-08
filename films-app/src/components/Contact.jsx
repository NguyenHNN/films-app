import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, CardContent, Typography, Button } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Card
        sx={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          borderRadius: '20px',
          boxShadow: '0 8px 32px var(--shadow-color)',
          textAlign: 'center',
        }}
      >
        <CardContent sx={{ color: 'var(--text-color)' }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Liên hệ
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, color: '#FFD700' }}>
            Email: filmsapp@example.com
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, color: '#FFD700' }}>
            Số điện thoại: +84 123 456 789
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#87CEEB' }}>
            Địa chỉ: 123 Đường Phim, TP. Hồ Chí Minh, Việt Nam
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/"
            sx={{
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

export default Contact;