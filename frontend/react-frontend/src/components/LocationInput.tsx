// Component for user to input a location and select from a list of suggestions.

import React, { useState } from 'react';

// Props for the LocationInput component.
// - locationList: An array of location names to suggest from.
// - onLocationSelect: A function triggered when a location is selected.
interface LocationInputProps {
  locationList: string[];
  onLocationSelect: (location: string) => void;
}

// Define the LocationInput component.
const LocationInput: React.FC<LocationInputProps> = ({
  locationList,
  onLocationSelect,
}) => {
  // State to track the user's input.
  const [query, setQuery] = useState('');
  // State to store filtered suggestions based on the input.
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Handle changes in the input field.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; // Get the current input value.
    setQuery(value); // Update the query state.

    if (value) {
      // Filter the locationList for suggestions matching the input.
      const filtered = locationList.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered); // Update suggestions state.
    } else {
      setSuggestions([]); // Clear suggestions if input is empty.
    }
  };

  // Handle click events on a suggestion.
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion); // Update the input field with the selected suggestion.
    onLocationSelect(suggestion); // Trigger the onLocationSelect callback.
    setSuggestions([]); // Clear suggestions.
  };

  return (
    <div className="col" style={{ position: 'relative' }}>
      <h3>Select Location</h3>
      {/* Input field for user to type a location */}
      <input
        type="text"
        placeholder="Enter a Fishing Location..."
        value={query}
        onChange={handleInputChange}
        className="form-control text-center"
      />
      {/* Render the suggestions dropdown if there are suggestions */}
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{ cursor: 'pointer' }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationInput;
