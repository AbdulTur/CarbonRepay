import React, { useState } from 'react';
import '../styles/AddDistanceContainer.css';

function AddDistanceContainer({ handleAddDistance, handleSelectVehicle }) {
  const [selectedButton, setSelectedButton] = useState(null);
  const [distance, setDistance] = useState('');

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  const handleInputChange = (e) => {
    setDistance(e.target.value);
  };

  const handleAddClick = () => {
    if (distance && selectedButton) {
      handleAddDistance(parseFloat(distance));
      setDistance('');
    } else {
      console.log('Please select a vehicle and enter a distance');
    }
  };

  return (
    <div className="container add-distance-container">
      <h2>Add Distance</h2>
      <div className="button-group">
        <button
          className={`distance-btn${selectedButton === 'truck' ? ' active' : ''}`}
          onClick={() => {
            handleClick('truck');
            handleSelectVehicle('truck');
          }}
        >
          Truck
        </button>
        <button
          className={`distance-btn${selectedButton === 'van' ? ' active' : ''}`}
          onClick={() => {
            handleClick('van');
            handleSelectVehicle('van');
          }}
        >
          Van
        </button>
        <button
          className={`distance-btn${selectedButton === 'trailer' ? ' active' : ''}`}
          onClick={() => {
            handleClick('trailer');
            handleSelectVehicle('trailer');
          }}
        >
          Trailer
        </button>
      </div>
      <div className="input-group">
        <input
          className="distance-input"
          type="number"
          value={distance}
          onChange={handleInputChange}
          placeholder="Enter distance"
        />
        <button className="add-btn" onClick={handleAddClick}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddDistanceContainer;
