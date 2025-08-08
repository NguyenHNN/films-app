import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const News = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 3, color: 'var(--text-color)', fontWeight: 700 }}>
        Tin tức
      </Typography>
      <Accordion sx={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'var(--text-color)' }} />}>
          <Typography sx={{ color: 'var(--text-color)' }}>Tin tức mới nhất về phim</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'var(--text-color)' }}>
            Các bộ phim bom tấn sắp ra mắt trong năm 2025!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'var(--text-color)' }} />}>
          <Typography sx={{ color: 'var(--text-color)' }}>Sự kiện điện ảnh</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'var(--text-color)' }}>
            Liên hoan phim quốc tế tại TP. Hồ Chí Minh.
          </Typography>
        </AccordionDetails>
      </Accordion>
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
};

export default News;