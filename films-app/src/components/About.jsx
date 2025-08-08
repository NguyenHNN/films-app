import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Tabs, Tab, Box, Typography, Button } from '@mui/material';

const About = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 3, color: 'var(--text-color)', fontWeight: 700 }}>
        Giới thiệu
      </Typography>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        centered
        sx={{ mb: 3, '.MuiTab-root': { color: 'var(--text-color)', textTransform: 'none' } }}
      >
        <Tab label="Về ứng dụng" />
        <Tab label="Nhóm phát triển" />
      </Tabs>
      <Box sx={{ p: 3, background: 'var(--card-bg)', borderRadius: '20px', boxShadow: '0 8px 32px var(--shadow-color)' }}>
        {tabValue === 0 && (
          <Typography variant="body1" sx={{ color: 'var(--text-color)' }}>
            Films App là ứng dụng giúp bạn khám phá các bộ phim yêu thích với giao diện thân thiện và thông tin chi tiết.
          </Typography>
        )}
        {tabValue === 1 && (
          <Typography variant="body1" sx={{ color: 'var(--text-color)' }}>
            Được phát triển bởi đội ngũ đam mê phim ảnh tại Việt Nam.
          </Typography>
        )}
      </Box>
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

export default About;