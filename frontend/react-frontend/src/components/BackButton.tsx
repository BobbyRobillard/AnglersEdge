// BackButton.tsx
// This is a reusable React component that renders a button to navigate back in an application.
// It accepts a single prop 'goBack', which is a callback function executed when the button is clicked.

import React from 'react';

// Define the BackButton component.
// Props:
// - goBack: A function that defines the behavior when the button is clicked (e.g., navigating to a previous page).
const BackButton = ({ goBack }: { goBack: () => void }) => {
  return (
    <button 
      onClick={goBack} // Trigger the goBack function when the button is clicked.
      className="btn btn-secondary" // Applies CSS styles defined in the 'btn' and 'btn-secondary' bootstrap classes.
    >
      Go Back {/* Button label */}
    </button>
  );
};

export default BackButton;