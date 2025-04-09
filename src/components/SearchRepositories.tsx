// components/SearchRepositories.tsx
import React, { useState } from 'react';
import getRepositories from '../services/githubService';
import { Repository } from '../types/Repository';

interface SearchRepositoriesProps {
  onRepositoriesFound: (repos: Repository[]) => void;
}

const SearchRepositories: React.FC<SearchRepositoriesProps> = ({ onRepositoriesFound }) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!username) return;
    setLoading(true);
    setError('');
    try {
      const data = await getRepositories(username);
      onRepositoriesFound(data.items);
    } catch (err) {
      setError('Usuário não encontrado ou erro na busca');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Digite o nome do usuário do GitHub"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Carregando...' : 'Buscar Repositórios'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SearchRepositories;
