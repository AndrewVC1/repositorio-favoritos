// types/Repository.ts

export interface Repository {
    id: number;
    name: string;
    description: string;
    stargazers_count: number;
    html_url: string;
  }
  
  export interface UserRepositoriesResponse {
    items: Repository[];
  }
  