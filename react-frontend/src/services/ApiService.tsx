import ApiClient from './ApiClient';
import { Fish } from './Types';

export const fetchFish = async (): Promise<Fish[]> => {
  try {
    const response = await ApiClient.get('/fish/');
    return response.data.map((item: any) => ({
      id: item.id,
      species: item.species,
      bait: item.bait || [],
      food: item.food || [],
      structure: item.structure || [],
      locations: item.locations || [],
      trends: item.trends || [],
      techniques: item.techniques || [],
      tutorial_video: item.tutorial_video || '',
    }));
  } catch (error) {
    console.error('Error fetching fish data:', error);
    throw new Error('Failed to fetch fish data. Please try again later.');
  }
};

