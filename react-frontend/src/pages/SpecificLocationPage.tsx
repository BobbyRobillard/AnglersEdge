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

  if (loading) return <p>Loading species data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <BackButton goBack={goBack} />
      {data && (
        <>
          <h3>{data.species}</h3>
          <h5>Location: {location}</h5>
          <SpeciesDetails
            sections={[
              { title: 'Food Sources', items: data.bait.map((b) => b.name) },
              { title: 'Current Trends', items: data.trends },
              { title: 'Techniques', items: data.techniques },
            ]}
          />
          {data.tutorial_video && <VideoSection videoUrl={data.tutorial_video} />}
        </>
      )}
    </>
  );
};

export default SpecificLocationPage;
