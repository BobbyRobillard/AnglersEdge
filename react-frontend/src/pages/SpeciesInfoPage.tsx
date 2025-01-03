// Mapping of species to their respective image URLs
const speciesImageMap: Record<string, string> = {
  Snook: '/src/assets/snook.png',
  Redfish: '/src/assets/redfish.png',
  'Mangrove Snapper': '/src/assets/mangrove.png',
};

const SpeciesInfoPage = ({
  species,
  goBack,
}: {
  species: string;
  goBack: () => void;
}) => {
  // Get the image URL for the selected species or a fallback image
  const imageUrl = speciesImageMap[species];

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
          {/* Species */}
          <div className="col-9 text-center">
            <h3>{species}</h3>
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

          {/* Seasonal Trends */}
          <div className="col">
            <h4>Seasonal Trends</h4>
            <hr />
            <ul>
              <li>Seasonal Trend 1</li>
              <li>Seasonal Trend 2</li>
              <li>Seasonal Trend 3</li>
            </ul>
          </div>
        </div>

        <div className="row">

          {/* Structure */}
          <div className="col">
            <h4>Structures</h4>
            <hr />
            <ul>
              <li>Structure 1</li>
              <li>Structure 2</li>
              <li>Structure 3</li>
            </ul>
          </div>

          {/* Baits and Techniques */}
          <div className="col">
            <h4>Baits and Techniques</h4>
            <hr />
            <ul>
              <li>Bait 1</li>
              <li>Bait 2</li>
              <li>Technique 1</li>
              <li>Technique 2</li>
            </ul>
          </div>

        
        </div>

        <div className="row">
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

export default SpeciesInfoPage;
