// SpeciesDetail.tsx
// This component renders detailed information about a species in a tabular format.

import React from 'react';

interface Section {
  title: string; // Title of the section (e.g., "Baits", "Structures").
  items: string[]; // List of items under this section.
}

const SpeciesDetails = ({ sections }: { sections: Section[] }) => {
  return (
    <>
      <div className="row">
        {sections.map((section, index) => (
          <div className="col-6" key={index}>
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>{section.title}</th>
                </tr>
              </thead>
              <tbody>
                {section.items.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
};

export default SpeciesDetails;