// components/FavoritesPage.tsx
import React from 'react';
import { Repository } from '../types/Repository';

const FavoritesPage: React.FC<{ favorites: Repository[] }> = ({ favorites }) => {
  return (
    <div>
      <h2>Repositórios Favoritos</h2>
      {favorites.length === 0 ? (
        <p>Nenhum repositório favorito ainda.</p>
      ) : (
        favorites.map((repo) => (
          <div key={repo.id}>
            <h3>{repo.name}</h3>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              Acessar no GitHub
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesPage;
