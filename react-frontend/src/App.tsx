import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Full-width navbar */}
      <Navbar />

      {/* Main app content */}
      <div className="col-sm-6 offset-sm-3 text-center">
        <HomePage />
      </div>
    </div>
  );
};

export default App;
