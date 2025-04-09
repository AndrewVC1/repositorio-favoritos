// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchRepositories from './components/SearchRepositories';
import RepositoryList from './components/RepositoryList';
import FavoritesPage from './components/FavoritesPage';
import { Repository } from './types/Repository';
import { useTheme } from './context/ThemeContext';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // 🎨 Pegamos o tema atual e a função de alternância
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [favorites, setFavorites] = useState<Repository[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  return (
    <Router>
      <nav>
        <Link to="/">Buscar Repositórios</Link> | <Link to="/favorites">Favoritos</Link>
        <button onClick={toggleTheme} style={{ marginLeft: '10px' }}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<SearchRepositories onRepositoriesFound={setRepositories} />}
        />
        <Route
          path="/favorites"
          element={<FavoritesPage favorites={favorites} />}
        />
      </Routes>

      <RepositoryList repositories={repositories} />
    </Router>
  );
};

export default App;

