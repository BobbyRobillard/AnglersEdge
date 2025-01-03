import React, { useState } from "react";

const HomePage = () => {
  const [species, setSpecies] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log(`Searching for ${species} in ${location}`);
    // Add logic to navigate to search results or perform API call
  };

  return (
    <>
    <h1 className="">Save Time, Catch More Fish</h1>
    <div className="main-container">
        <h3>Select Target Species</h3>
        <div className="row">
          <div className="col-4">
            <img src="/src/assets/snook.png" alt="" />
          </div>
          <div className="col-4"></div>
          <div className="col-4"></div>
        </div>
        <h3>Select Location</h3>
        <input
          type="text"
          placeholder="Enter A Fishing location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="btn btn-lg btn-primary" onClick={handleSearch}>Start Catching</button>
    </div>
    </>
  );
};

export default HomePage;
