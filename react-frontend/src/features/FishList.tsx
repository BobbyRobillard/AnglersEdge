import React, { useEffect, useState } from 'react';
import { fetchFish } from '../services/ApiService';

// Define the type for a single fish
interface Fish {
  id: number;
  species: string;
}

const FishList: React.FC = () => {
  const [fish, setFish] = useState<Fish[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFish = async () => {
      try {
        const data = await fetchFish();
        setFish(data);
      } catch (err) {
        setError('Failed to fetch fish data');
      } finally {
        setLoading(false);
      }
    };

    loadFish();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Fish List</h2>
      <ul>
        {fish.map((item) => (
          <li key={item.id}>{item.species}</li>
        ))}
      </ul>
    </div>
  );
};

export default FishList;
