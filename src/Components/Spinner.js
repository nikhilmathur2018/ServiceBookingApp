// Spinner.jsx
import React, { useEffect, useState } from "react";
import './Spinner.css';  // Add any specific styles for the spinner here

const Spinner = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);  // Hide spinner after 1 second (adjust this time as needed)
    }, 1000);

    return () => clearTimeout(timer);  // Cleanup the timer on component unmount
  }, []);

  if (!showSpinner) return null;  // If not showing, don't render anything

  return (
    <div id="spinner" className="spinner-overlay">
      <div className="spinner">Loading...</div>
    </div>
  );
};

export default Spinner;
