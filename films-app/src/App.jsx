import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Films from './components/Films';
import FilmDetail from './components/FilmDetail';
import Contact from './components/Contact';
import './App.css';

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
        <div className="App">
          <nav className="nav-bar">
            <Link to="/" className="nav-link">Danh sách phim</Link>
            <Link to="/contact" className="nav-link">Liên hệ</Link>
            <button onClick={toggleTheme} className="theme-toggle-button">
              Chuyển sang {theme === 'light' ? 'Chế độ tối' : 'Chế độ sáng'}
            </button>
          </nav>
          <Routes>
            <Route path="/" element={<Films />} />
            <Route path="/film/:id" element={<FilmDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;