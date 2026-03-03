import React from 'react';
import '../styles/Loader.scss';

function Loader() {
  return (
    <div className="loader-overlay" role="status" aria-live="polite">
      <div className="spinner" aria-label="Loading"></div>
    </div>
  );
}

export default Loader;
