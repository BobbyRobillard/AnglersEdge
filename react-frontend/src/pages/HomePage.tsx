import React, { useEffect, useState } from 'react';
import { ViewPage } from '../constants';
import SpecificLocationPage from './SpecificLocationPage';
import SpeciesInfoPage from './SpeciesInfoPage';
import { fetchFish } from '../services/ApiService'; // Fetch species data from API
import { Fish } from '../services/Types';
import SpeciesSelector from '../components/SpeciesSelector';
import LocationInput from '../components/LocationInput';

const HomePage: React.FC = () => {
  const [speciesList, setSpeciesList] = useState<Fish[]>([]); // Dynamically fetched species
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [location, setLocation] = useState('');
  const [locationSpecificMode, setLocationSpecificMode] = useState(false); // Toggle between modes
  const [viewPage, setViewPage] = useState<ViewPage>(ViewPage.Home);
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

  // Render Specific Location Page
  if (viewPage === ViewPage.Location) {
    return (
      <SpecificLocationPage
        species={selectedSpecies}
        location={location}
        goBack={() => setViewPage(ViewPage.Home)}
      />
    );
  }

  // Render Species Info Page
  if (viewPage === ViewPage.Species) {
    return (
      <SpeciesInfoPage
        species={selectedSpecies}
        goBack={() => setViewPage(ViewPage.Home)}
      />
    );
  }

  // Render Main Home Page
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

      <SpeciesSelector
        speciesList={speciesList}
        selectedSpecies={selectedSpecies}
        onSpeciesClick={(species) => setSelectedSpecies(species)}
      />

      {locationSpecificMode && (
        <LocationInput
          locationList={locationList}
          onLocationSelect={(location) => setLocation(location)}
        />
      )}

      <button
        className="btn btn-lg btn-primary margin-top"
        onClick={() =>
          setViewPage(
            locationSpecificMode ? ViewPage.Location : ViewPage.Species
          )
        }
        disabled={!selectedSpecies || (locationSpecificMode && !location)}
      >
        Start Catching
      </button>
    </>
  );
};

export default HomePage;
