import React from 'react';

// Mapping of species to their respective image URLs
const speciesImageMap: Record<string, string> = {
  Snook: '/src/assets/snook.png',
  Redfish: '/src/assets/redfish.png',
  'Mangrove Snapper': '/src/assets/mangrove.png',
};

const SpecificLocationPage = ({
  species,
  location,
  goBack,
}: {
  species: string;
  location: string;
  goBack: () => void;
}) => {
  // Get the image URL for the selected species or a fallback image
  const imageUrl = speciesImageMap[species] || '/src/assets/default.png';

  return (
    <>
      <div className="main-container">
        <div className="row">
          {/* Species Image */}
          <div className="col-3">
            <img
              src={imageUrl}
              alt={`${species} illustration`}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          {/* Species and Location Information */}
          <div className="col-9 text-center">
            <h3>{species}</h3>
            <h4>{location}</h4>
          </div>
        </div>

        <div className="row">
          {/* Food Sources */}
          <div className="col">
            <h4>Food Sources</h4>
            <hr />
            <ul>
              <li>Food Source 1</li>
              <li>Food Source 2</li>
              <li>Food Source 3</li>
            </ul>
          </div>

          {/* Current Trends */}
          <div className="col">
            <h4>Current Trends</h4>
            <hr />
            <ul>
              <li>Current Trend 1</li>
              <li>Current Trend 2</li>
              <li>Current Trend 3</li>
            </ul>
          </div>
        </div>

        <div className="row">
          {/* Current Techniques */}
          <div className="col">
            <h4>Current Techniques</h4>
            <hr />
            <ul>
              <li>Current Technique 1</li>
              <li>Current Technique 2</li>
              <li>Current Technique 3</li>
            </ul>
          </div>

          {/* Video Tutorial */}
          <div className="col">
            <h4>Video Tutorial</h4>
            <hr />
            <iframe
              src="https://www.youtube.com/embed/EAo-pwZ6y1E?si=Rvi85MCwJ8ev-mvj"
              title="Video Tutorial"
            ></iframe>
          </div>
        </div>

        <button onClick={goBack} className="btn btn-secondary">
          Go Back
        </button>
      </div>
    </>
  );
};

export default SpecificLocationPage;
