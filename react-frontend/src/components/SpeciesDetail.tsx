import React from 'react';

interface Section {
  title: string;
  items: string[];
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
