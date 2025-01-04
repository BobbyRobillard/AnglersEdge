import React from 'react';

const BackButton = ({ goBack }: { goBack: () => void }) => {
  return (
    <button onClick={goBack} className="btn btn-secondary">
      Go Back
    </button>
  );
};

export default BackButton;
