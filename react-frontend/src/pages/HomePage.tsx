import React, { useState } from "react";

const HomePage = () => {
  const [species, setSpecies] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log(`Searching for ${species} in ${location}`);
    // Add logic to navigate to search results or perform API call
  };

  return (
    <div>
      <h2>Find Your Catch</h2>
      <div>
        <input
          type="text"
          placeholder="Enter species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default HomePage;
