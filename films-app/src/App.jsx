import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Films from './components/Films';
import FilmDetail from './components/FilmDetail';
import Contact from './components/Contact';
import About from './components/About';
import News from './components/News';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <AppBar
          position="static"
          sx={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            boxShadow: '0 4px 16px var(--shadow-color)',
            mb: 4,
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div" sx={{ color: 'var(--text-color)' }}>
              Films App
            </Typography>
            <Box>
              <Button color="inherit" component={RouterLink} to="/" sx={{ color: 'var(--text-color)', textTransform: 'none' }}>
                Danh sách phim
              </Button>
              <Button color="inherit" component={RouterLink} to="/about" sx={{ color: 'var(--text-color)', textTransform: 'none' }}>
                Giới thiệu
              </Button>
              <Button color="inherit" component={RouterLink} to="/news" sx={{ color: 'var(--text-color)', textTransform: 'none' }}>
                Tin tức
              </Button>
              <Button color="inherit" component={RouterLink} to="/contact" sx={{ color: 'var(--text-color)', textTransform: 'none' }}>
                Liên hệ
              </Button>
              <IconButton onClick={toggleTheme} sx={{ color: 'var(--text-color)' }}>
                {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Films />} />
          <Route path="/film/:id" element={<FilmDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;