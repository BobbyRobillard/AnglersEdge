import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Full-width navbar */}
      <Navbar />

      {/* Main app content */}
      <main className="container mt-4">
        <HomePage />
      </main>
    </div>
  );
};

export default App;
