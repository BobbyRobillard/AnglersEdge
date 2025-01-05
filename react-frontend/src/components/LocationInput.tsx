import React, { useState } from 'react';

interface LocationInputProps {
  locationList: string[];
  onLocationSelect: (location: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({
  locationList,
  onLocationSelect,
}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filtered = locationList.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    onLocationSelect(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="col" style={{ position: 'relative' }}>
      <h3>Select Location</h3>
      <input
        type="text"
        placeholder="Enter a Fishing Location..."
        value={query}
        onChange={handleInputChange}
        className="form-control text-center"
      />
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
