import React, { useEffect, useState } from 'react';
import SpeciesDetails from '../components/SpeciesDetail';
import VideoSection from '../components/VideoSection';
import BackButton from '../components/BackButton';
import { fetchFish, Fish } from '../services/ApiService';

const SpeciesInfoPage = ({
  species,
  goBack,
}: {
  species: string;
  goBack: () => void;
}) => {
  const [selectedSpecies, setSelectedSpecies] = useState<Fish | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSpeciesData = async () => {
      try {
        const data = await fetchFish();
        const foundSpecies = data.find((fish) => fish.species === species);
        if (foundSpecies) {
          setSelectedSpecies(foundSpecies);
        } else {
          setError('Species not found.');
        }
      } catch (err) {
        console.error(err);
        setError('Failed to load species data.');
      }
    };

    loadSpeciesData();
  }, [species]);

  if (error) return <p>{error}</p>;

  return (
    <>
      <BackButton goBack={goBack} />
      {selectedSpecies && <h3>{selectedSpecies.species}</h3>}
      {selectedSpecies && (
        <SpeciesDetails
          sections={[
            { title: 'Bait', items: selectedSpecies.bait.map((b) => b.name) },
            { title: 'Food', items: selectedSpecies.food.map((f) => f.name) },
            { title: 'Trends', items: selectedSpecies.trends },
            { title: 'Techniques', items: selectedSpecies.techniques },
          ]}
        />
      )}
      {selectedSpecies?.tutorial_video && (
        <VideoSection videoUrl={selectedSpecies.tutorial_video} />
      )}
    </>

  );
};

export default SpeciesInfoPage;
