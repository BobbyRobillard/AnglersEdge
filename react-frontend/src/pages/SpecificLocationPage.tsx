import React from 'react';
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
  const sections = [
    {
      title: 'Food Sources',
      items: ['Food Source 1', 'Food Source 2', 'Food Source 3'],
    },
    { title: 'Current Trends', items: ['Trend 1', 'Trend 2', 'Trend 3'] },
    {
      title: 'Current Techniques',
      items: ['Technique 1', 'Technique 2', 'Technique 3'],
    },
  ];

  return (
    <>
      <BackButton goBack={goBack} />
      <SpeciesDetails
        species={species}
        location={location}
        includeLocation
        sections={sections}
      />
      <VideoSection videoUrl="https://www.youtube.com/embed/EAo-pwZ6y1E?si=Rvi85MCwJ8ev-mvj" />
    </>
  );
};

export default SpecificLocationPage;
