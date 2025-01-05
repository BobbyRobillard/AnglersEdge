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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <BackButton goBack={goBack} />
      {data && (
        <>
          <h3>{data.species}</h3>
          <SpeciesDetails
            sections={[
              { title: 'Bait', items: data.bait.map((b) => b.name) },
              { title: 'Food', items: data.food.map((f) => f.name) },
              { title: 'Trends', items: data.trends },
              { title: 'Techniques', items: data.techniques },
            ]}
          />
          {data.tutorial_video && (
            <VideoSection videoUrl={data.tutorial_video} />
          )}
        </>
      )}
    </>
  );
};

export default SpeciesInfoPage;
