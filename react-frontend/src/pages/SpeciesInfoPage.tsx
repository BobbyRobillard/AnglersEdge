import React from "react";

const SpeciesInfoPage = ({
  species,
  goBack,
}: {
  species: string;
  goBack: () => void;
}) => {
  return (
    <div>
      <button onClick={goBack} className="btn btn-secondary">
        Go Back
      </button>
      <h2>Information about {species}</h2>
      {/* Add dynamic content here */}
    </div>
  );
};

export default SpeciesInfoPage;
