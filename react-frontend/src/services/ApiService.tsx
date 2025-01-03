import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define types for data returned by the API
interface Fish {
  id: number;
  species: string;
}

interface Location {
  id: number;
  name: string;
}

export const fetchFish = async (): Promise<Fish[]> => {
  const response = await apiClient.get<Fish[]>('/fish/');
  return response.data;
};

export const fetchLocations = async (): Promise<Location[]> => {
  const response = await apiClient.get<Location[]>('/location/');
  return response.data;
};

export default apiClient;
