// components/RepositoryList.tsx
import React, { useState, useEffect } from 'react';
import { Repository } from '../types/Repository';

const RepositoryList: React.FC<{ repositories: Repository[] }> = ({ repositories }) => {
  const [favorites, setFavorites] = useState<Repository[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const handleRemoveAllFavorites = (repo: Repository) => {
    let updatedFavorites;
    setFavorites ([]) 
    
  }
  const handleFavoriteToggle = (repo: Repository) => {
    let updatedFavorites;
    if (favorites.find((favorite) => favorite.id === repo.id)) {
      updatedFavorites = favorites.filter((favorite) => favorite.id !== repo.id);
    } else {
      if (favorites.length >= 5) {
        alert('Você não pode favoritar mais de 5 repositórios');
        return;
      }
      updatedFavorites = [...favorites, repo];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div>
      {repositories.map((repo) => (
        <div key={repo.id}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <p>⭐ {repo.stargazers_count}</p>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            Acessar no GitHub
          </a>
          <button onClick={() => handleFavoriteToggle(repo)}>
            {favorites.find((favorite) => favorite.id === repo.id)
              ? 'Desfavoritar'
              : 'Favoritar'}
          </button>
          <button onClick= {() => handleRemoveAllFavorites(repo) }>
            ? 'Remover Todos os favoritos'
          </button> 
        </div>
      ))}
    </div>
  );
};

export default RepositoryList;
