// SpeciesInfoPage.tsx
// This page displays detailed information about a specific species.
// It includes sections such as bait, food, trends, techniques, and an optional tutorial video.

import React from 'react';
import { useSpeciesData } from '../hooks/UseSpeciesData';
import SpeciesDetails from '../components/SpeciesDetail';
import VideoSection from '../components/VideoSection';
import BackButton from '../components/BackButton';

const SpeciesInfoPage = ({
  species,
  goBack,
}: {
  species: string;
  goBack: () => void;
}) => {
  const { data, loading, error } = useSpeciesData(species);

  if (loading) return <p>Loading...</p>; // Show loading message while fetching data.
  if (error) return <p>{error}</p>; // Display error message if fetching fails.

  return (
    <>
      <BackButton goBack={goBack} /> {/* Navigation button to go back to the previous page. */}
      {data && (
        <>
          <h3>{data.species}</h3> {/* Display the species name. */}
          <SpeciesDetails
            sections={[
              { title: 'Bait', items: data.bait.map((b) => b.name) }, // List of bait options.
              { title: 'Food', items: data.food.map((f) => f.name) }, // List of food sources.
              { title: 'Trends', items: data.trends }, // Current trends related to the species.
              { title: 'Techniques', items: data.techniques }, // Techniques for catching the species.
            ]}
          />
          {data.tutorial_video && (
            <VideoSection videoUrl={data.tutorial_video} /> // Embedded video tutorial.
          )}
        </>
      )}
    </>
  );
};

export default SpeciesInfoPage;