// SpeciesSelector.tsx
// This component allows users to select a fish species from a list.

import React from 'react';

// Import images as ESModules
import redFishImage from '../assets/redfish.png';
import snookImage from '../assets/snook.png';
import snapperImage from '../assets/mangrove_snapper.png';

// Map species names to their respective images
const speciesImages: Record<string, string> = {
  "redfish": redFishImage,
  "snook": snookImage,
  "mangrove snapper": snapperImage,
  // Add more species as needed
};

interface SpeciesSelectorProps {
  speciesList: { id: number; species: string }[]; // List of available species.
  selectedSpecies: string; // Currently selected species.
  onSpeciesClick: (species: string) => void; // Callback for when a species is clicked.
}

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
            src={speciesImages[fish.species.toLowerCase()]}
            alt={fish.species}
          />
          <h4>{fish.species}</h4>
        </div>
      ))}
    </div>
  );
};

export default SpeciesSelector;
