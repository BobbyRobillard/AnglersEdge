import React, { useState } from "react";
import SpecificLocationPage from "./SpecificLocationPage"; // Import the specific page component

const HomePage = () => {
  const [selectedSpecies, setSelectedSpecies] = useState(""); // Track selected species
  const [location, setLocation] = useState("");
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [viewSpecificPage, setViewSpecificPage] = useState(false); // Toggle view

  const handleSpeciesClick = (species: string) => {
    setSelectedSpecies(species);
  };

  // Pre-populated array of locations
  const locationList = [
    "Lake Okeechobee",
    "Everglades National Park",
    "Key West",
    "Miami Beach",
    "Orlando Lakes",
    "Tampa Bay",
    "St. Augustine",
    "Panama City Beach",
    "Destin Harbor",
    "Pensacola Bay",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Filter the pre-populated array
    if (value) {
      const filteredLocations = locationList.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredLocations);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setLocation(suggestion); // Set the selected location
    setQuery(suggestion); // Update the input field
    setSuggestions([]); // Clear the suggestions
  };

  const handleSearch = () => {
    if (selectedSpecies && location) {
      setViewSpecificPage(true); // Show specific location page
    } else {
      alert("Please select a species and location!");
    }
  };

  const goBack = () => {
    setViewSpecificPage(false); // Return to the main page
  };

  // If viewing the specific location page, render it
  if (viewSpecificPage) {
    return (
      <SpecificLocationPage
        species={selectedSpecies}
        location={location}
        goBack={goBack}
      />
    );
  }

  // Main homepage rendering
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
          <div className="col" style={{ position: "relative" }}>
            <h3>Select Location</h3>
            <input
              type="text"
              placeholder="Enter A Fishing Location..."
              value={query}
              onChange={handleInputChange}
            />
            <ul className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
            <button
              className="btn btn-lg btn-primary"
              onClick={handleSearch}
            >
              Show Fishing Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
