import { useEffect, useState } from 'react';
import { fetchFish } from '../services/ApiService';
import { Fish } from '../services/Types';

export const useSpeciesData = (species: string) => {
  const [data, setData] = useState<Fish | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSpeciesData = async () => {
      try {
        setLoading(true);
        const allFish = await fetchFish();
        const selectedFish = allFish.find((fish) => fish.species === species);
        if (selectedFish) {
          setData(selectedFish);
        } else {
          setError('Species not found.');
        }
      } catch (err) {
        setError('Failed to load species data.');
      } finally {
        setLoading(false);
      }
    };

    loadSpeciesData();
  }, [species]);

  return { data, loading, error };
};
