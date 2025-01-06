// SpecificLocationPage.tsx
// This page provides location-specific details for catching a selected species.
// It includes sections such as food sources, current trends, techniques, and an optional tutorial video.

import React from 'react';
import { useSpeciesData } from '../hooks/UseSpeciesData';
import SpeciesDetails from '../components/SpeciesDetail';
import VideoSection from '../components/VideoSection';
import BackButton from '../components/BackButton';

const SpecificLocationPage = ({
  species,
  location,
  goBack,
}: {
  species: string;
  location: string;
  goBack: () => void;
}) => {
  const { data, loading, error } = useSpeciesData(species);

  if (loading) return <p>Loading species data...</p>; // Show loading message while fetching data.
  if (error) return <p>{error}</p>; // Display error message if fetching fails.

  return (
    <>
      <BackButton goBack={goBack} /> {/* Navigation button to go back to the previous page. */}
      {data && (
        <>
          <h3>{data.species}</h3> {/* Display the species name. */}
          <h5>Location: {location}</h5> {/* Display the selected location. */}
          <SpeciesDetails
            sections={[
              { title: 'Food Sources', items: data.bait.map((b) => b.name) }, // List of bait options.
              { title: 'Current Trends', items: data.trends }, // Current trends in the location.
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

export default SpecificLocationPage;
