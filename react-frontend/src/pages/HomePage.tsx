import React, { useState } from "react";

const HomePage = () => {
  const [location, setLocation] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState(""); // Track selected species

  const handleSearch = () => {
    console.log(`Searching for ${selectedSpecies} in ${location}`);
    // Package data, send to backend.
    // Retrieve data, render results to SpeciesInfoPage.
  };

  const handleSpeciesClick = (species: string) => {
    setSelectedSpecies(species);
  };

  return (
    <>
    <h1 className="">Save Time, Catch More Fish</h1>
    <div className="main-container">
        <h3>Select Target Species</h3>
        <div className="row">
          <div
            className={`col-4 ${selectedSpecies === "Snook" ? "highlight" : ""}`}
            onClick={() => handleSpeciesClick("Snook")}
          >
            <img className="species-img" src="/src/assets/snook.png" alt="" />
            <h4>Snook</h4>
          </div>
          <div
            className={`col-4 ${selectedSpecies === "Redfish" ? "highlight" : ""}`}
            onClick={() => handleSpeciesClick("Redfish")}
          >
            <img className="species-img" src="/src/assets/redfish.png" alt="" />
            <h4>Red Drum (Redfish)</h4>
          </div>
          <div
            className={`col-4 ${selectedSpecies === "Mangrove Snapper" ? "highlight" : ""}`}
            onClick={() => handleSpeciesClick("Mangrove Snapper")}
          >
            <img className="species-img" src="/src/assets/mangrove.png" alt="" />
            <h4>Mangrove Snapper</h4>
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col">
            <h3>Select Location</h3>
            <input
              type="text"
              placeholder="Enter A Fishing location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button className="btn btn-lg btn-primary" onClick={handleSearch}>Start Catching</button>
          </div>
        </div>
    </div>
    </>
  );
};

export default HomePage;
