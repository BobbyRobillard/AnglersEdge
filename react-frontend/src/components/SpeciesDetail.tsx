import React from 'react';

const speciesImageMap: Record<string, string> = {
  Snook: '/src/assets/snook.png',
  Redfish: '/src/assets/redfish.png',
  'Mangrove Snapper': '/src/assets/mangrove_snapper.png',
};

interface Section {
  title: string;
  items: string[];
}

const SpeciesDetails = ({
  species,
  location,
  includeLocation,
  sections,
}: {
  species: string;
  location?: string;
  includeLocation?: boolean;
  sections: Section[];
}) => {
  const imageUrl = speciesImageMap[species] || '/src/assets/default.png';

  return (
    <>
      <div className="row">
        {/* Species Image */}
        <div className="col-3">
          <img
            src={imageUrl}
            alt={`${species} illustration`}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        {/* Species and (Optional) Location Information */}
        <div className="col-9 text-center">
          <h3>{species}</h3>
          {includeLocation && <h4>{location}</h4>}
        </div>
      </div>

      {/* Render Custom Sections */}
      {sections.map((section, index) => (
        <div className="row" key={index}>
          <div className="col">
            <h4>{section.title}</h4>
            <hr />
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default SpeciesDetails;
