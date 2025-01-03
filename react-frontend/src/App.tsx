import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Full-width navbar */}
      <Navbar />

      {/* Main app content */}
      <h1 className="text-center">Save Time, Catch More Fish</h1>
      <div className="col-sm-6 offset-sm-3 text-center main-container">
        <HomePage />
      </div>
    </div>
  );
};

export default App;
