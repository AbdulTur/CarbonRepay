import React from 'react';
import '../styles/DataContainer.css';

function DataContainer({ distance, emissions, money, handleReset }) {
  return (
    <div className="container data-container">
      <h2>Data</h2>
      <div className="data-row">
        <span>Distance: </span>
        <span>{distance.toFixed(2)}</span>
        {distance > 0 && <span> km</span>} {/* Add the unit if distance exists */}
      </div>
      <div className="data-row">
        <span>Emissions (metric tons): </span>
        <span>{emissions.toFixed(2)}</span>
        {emissions > 0 && <span> Tons</span>} {/* Add the unit if emissions exist */}
      </div>
      <div className="data-row">
        <span>Money to be Donated: </span>
        <span>{money.toFixed(2)}</span>
        {money > 0 && <span> $</span>} {/* Add the unit if money exists */}
      </div>
      <button onClick={handleReset} className="reset-btn">Reset</button>
    </div>
  );
}

export default DataContainer;
