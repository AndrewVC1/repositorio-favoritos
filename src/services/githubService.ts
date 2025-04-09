// services/githubService.ts
import axios from 'axios';
import { UserRepositoriesResponse } from '../types/Repository';

const getRepositories = async (username: string): Promise<UserRepositoriesResponse> => {
  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=user:${username}&sort=stars`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar repositórios');
  }
};

export default getRepositories;
