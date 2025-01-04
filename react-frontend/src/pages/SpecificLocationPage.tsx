import React, { useEffect, useState } from 'react';
import SpeciesDetails from '../components/SpeciesDetail';
import VideoSection from '../components/VideoSection';
import BackButton from '../components/BackButton';
import { fetchFish, Fish } from '../services/ApiService';

const SpecificLocationPage = ({
  species,
  location,
  goBack,
}: {
  species: string;
  location: string;
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

  // Business Logic to filter trends/techniques for the current ones in the given location.
  /* 
    1. Determine current conditions in the location via API call:
      - Weather
      - Water Temperature
      - Time of Day
      - Water Clarity
      - etc.

    2. Utilize <Client Provided> business logic to filter trends/techniques for ones applicable to the current conditions.

    3. Pass the filtered trends/techniques to the SpeciesDetails component.
  */

  return (
    <>
      <BackButton goBack={goBack} />
      {selectedSpecies && <h3>{selectedSpecies.species}</h3>}
      {location && <h5>Location: {location}</h5>}
      {selectedSpecies && (
        <SpeciesDetails
          sections={[
            { title: 'Food Sources', items: selectedSpecies.bait.map((b) => b.name) },
            { title: 'Current Trends', items: selectedSpecies.trends },
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

export default SpecificLocationPage;
