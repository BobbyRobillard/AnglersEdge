import axios from 'axios';

export interface Fish {
  id: number;
  species: string;
  bait: Nested[];
  food: Nested[];
  structure: Nested[];
  locations: Nested[];
  trends: string[];
  techniques: string[];
  tutorial_video?: string;
}

export interface Nested {
  id: number;
  name: string;
  properties: string[];
  notes: string[];
}

const ApiService = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchFish = async (): Promise<Fish[]> => {
  const response = await ApiService.get('/fish/');
  return response.data;
};

export default ApiService;
