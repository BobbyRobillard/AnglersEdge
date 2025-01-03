import React, { useEffect, useState } from 'react';
import SpecificLocationPage from './SpecificLocationPage';
import SpeciesInfoPage from './SpeciesInfoPage';
import { fetchFish } from '../services/ApiService'; // Fetch species data from API

interface Fish {
  id: number;
  species: string;
}

const HomePage: React.FC = () => {
  const [speciesList, setSpeciesList] = useState<Fish[]>([]); // Dynamically fetched species
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [location, setLocation] = useState('');
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [locationSpecificMode, setLocationSpecificMode] = useState(false); // Toggle between modes
  const [viewPage, setViewPage] = useState<'home' | 'location' | 'species'>(
    'home'
  );

  const [error, setError] = useState<string | null>(null); // Error handling

  useEffect(() => {
    // Fetch species data from API
    const loadSpecies = async () => {
      try {
        const data = await fetchFish();
        setSpeciesList(data);
      } catch (err) {
        setError('Failed to load species data.');
      }
    };

    loadSpecies();
  }, []);

  const handleSpeciesClick = (species: string) => {
    setSelectedSpecies(species);
  };

  const handleToggleMode = () => {
    setLocationSpecificMode((prev) => !prev); // Toggle mode
  };

  // Pre-populated array of locations
  const locationList = [
    'Lake Okeechobee',
    'Everglades National Park',
    'Key West',
    'Miami Beach',
    'Orlando Lakes',
    'Tampa Bay',
    'St. Augustine',
    'Panama City Beach',
    'Destin Harbor',
    'Pensacola Bay',
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
    if (locationSpecificMode) {
      if (selectedSpecies && location) {
        setViewPage('location'); // Show SpecificLocationPage
      } else {
        alert('Please select a species and location!');
      }
    } else {
      if (selectedSpecies) {
        setViewPage('species'); // Show SpeciesInfoPage
      } else {
        alert('Please select a species!');
      }
    }
  };

  const goBack = () => {
    setViewPage('home'); // Return to the home page
  };

  // Render SpecificLocationPage
  if (viewPage === 'location') {
    return (
      <SpecificLocationPage
        species={selectedSpecies}
        location={location}
        goBack={goBack}
      />
    );
  }

  // Render SpeciesInfoPage
  if (viewPage === 'species') {
    return <SpeciesInfoPage species={selectedSpecies} goBack={goBack} />;
  }

  // Main homepage rendering
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="row">
        <label>
          <input
            type="checkbox"
            checked={locationSpecificMode}
            onChange={handleToggleMode}
          />
          Location Specific Mode
        </label>
      </div>
      <h3>Select Target Species</h3>
      <div className="row">
        {speciesList.map((fish) => (
          <div
            key={fish.id}
            className={`col-4 ${selectedSpecies === fish.species ? 'highlight' : ''}`}
            onClick={() => handleSpeciesClick(fish.species)}
          >
            <img
              className="species-img"
              src={`/src/assets/${fish.species.toLowerCase().replace(' ', '_')}.png`}
              alt={fish.species}
            />
            <h4>{fish.species}</h4>
          </div>
        ))}
      </div>

      {locationSpecificMode && (
        <div className="row" style={{ marginTop: '20px' }}>
          <div className="col" style={{ position: 'relative' }}>
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
          </div>
        </div>
      )}
      <button className="btn btn-lg btn-primary" onClick={handleSearch}>
        Start Catching
      </button>
    </>
  );
};

export default HomePage;
