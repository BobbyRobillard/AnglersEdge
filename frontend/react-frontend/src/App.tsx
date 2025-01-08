// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FAQ from './pages/FAQ';

const App: React.FC = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Full-width Navbar */}
        <Navbar />

        {/* Main App Content */}
        <div className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-center">
                  <h1 className="text-center my-4">Save Time, Catch More Fish</h1>
                  <div className="col-sm-6 offset-sm-3 main-container">
                    <HomePage />
                  </div>
                </div>
              }
            />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-dark text-center py-3 mt-auto">
          <p className="mb-0 text-light">© 2025 Anglers Edge. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
