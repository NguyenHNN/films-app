// src/App.jsx
import React, { createContext, useState, useEffect } from 'react';
import Films from './components/Films';
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
      <div className="App">
        <div className="flex justify-between items-center max-w-1400 mx-auto px-5 mb-6">
          <h1 className="text-3xl font-bold">Films App</h1>
          <button
            onClick={toggleTheme}
            className="theme-toggle-button"
          >
            Chuyển sang {theme === 'light' ? 'Chế độ tối' : 'Chế độ sáng'}
          </button>
        </div>
        <Films />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;