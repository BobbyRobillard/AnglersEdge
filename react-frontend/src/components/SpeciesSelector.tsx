import React from 'react';

interface SpeciesSelectorProps {
  speciesList: { id: number; species: string }[];
  selectedSpecies: string;
  onSpeciesClick: (species: string) => void;
}

// Isolates species selection logic for better readability and reusability.
const SpeciesSelector: React.FC<SpeciesSelectorProps> = ({
  speciesList,
  selectedSpecies,
  onSpeciesClick,
}) => {
  return (
    <div className="row">
      {speciesList.map((fish) => (
        <div
          key={fish.id}
          className={`col-4 ${selectedSpecies === fish.species ? 'highlight' : ''}`}
          onClick={() => onSpeciesClick(fish.species)}
        >
          <img
            className="species-img"
            src={`/src/assets/${fish.species.toLowerCase().replace(' ', '_')}.png`}
            alt={fish.species}
          />
          <h4>{fish.species}</h4>
        </div>
      ))}
    </div>
  );
};

export default SpeciesSelector;
