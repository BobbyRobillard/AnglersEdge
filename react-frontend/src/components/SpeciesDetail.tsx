import React from 'react';

interface Section {
  title: string;
  items: string[];
}

const SpeciesDetails = ({
  species,
  sections,
}: {
  species: string;
  sections: Section[];
}) => {
  return (
    <>
      <h3>{species}</h3>
      {sections.map((section, index) => (
        <div key={index}>
          <h4>{section.title}</h4>
          <ul>
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default SpeciesDetails;
