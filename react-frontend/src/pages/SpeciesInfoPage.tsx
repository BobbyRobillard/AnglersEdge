import React from 'react';
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
  const sections = [
    {
      title: 'Food Sources',
      items: ['Food Source 1', 'Food Source 2', 'Food Source 3'],
    },
    {
      title: 'Seasonal Trends',
      items: ['Seasonal Trend 1', 'Seasonal Trend 2', 'Seasonal Trend 3'],
    },
    {
      title: 'Structure',
      items: ['Structure 1', 'Structure 2', 'Structure 3'],
    },
    {
      title: 'Bait & Techniques',
      items: ['Bait 1', 'Bait 2', 'Technique 1', 'Technique 2'],
    },
  ];

  return (
    <>
      <BackButton goBack={goBack} />
      <SpeciesDetails species={species} sections={sections} />
      <VideoSection videoUrl="https://www.youtube.com/embed/EAo-pwZ6y1E?si=Rvi85MCwJ8ev-mvj" />
    </>
  );
};

export default SpeciesInfoPage;
