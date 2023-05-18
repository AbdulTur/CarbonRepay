import React, { useState } from "react";
import AddDistanceContainer from "./components/AddDistanceContainer";
import CompanyContainer from "./components/CompanyContainer";
import DataContainer from "./components/DataContainer";
import Header from "./components/Header";
import AboutSection from './components/AboutSection';
import "./styles/App.css"; // Import the App.css file

function App() {
  const [distance, setDistance] = useState(0);
  const [vehicle, setVehicle] = useState(null);
  const [limit, setLimit] = useState(null);
  const [emissions, setEmissions] = useState(0);
  const [money, setMoney] = useState(0);

  const handleAddDistance = (newDistance) => {
    const totalDistance = distance + newDistance;
    setDistance(totalDistance);
    calculateEmissions(totalDistance, vehicle, limit);
  };

  const handleSelectVehicle = (selectedVehicle) => {
    setVehicle(selectedVehicle);
  };

  const handleSelectLimit = (selectedLimit) => {
    setLimit(selectedLimit);
  };

  const calculateEmissions = (totalDistance, vehicle, limit) => {
    if (totalDistance > limit) {
      const over = totalDistance - limit;
      const vehicleEmissionRates = { truck: 3.3, van: 2.6, trailer: 2.68 };
      const newEmissions = over * vehicleEmissionRates[vehicle];
      const totalEmissions = emissions + newEmissions;
      setEmissions(totalEmissions);
      setMoney(totalEmissions * 10.5);
    }
  };

  const handleReset = () => {
    setDistance(0);
    setEmissions(0);
    setMoney(0);
  };

  return (
    <div className="App">
      <Header />
      <AboutSection />
      <div className="App-content"> {/* Add the App-content class */}
        <AddDistanceContainer
          handleAddDistance={handleAddDistance}
          handleSelectVehicle={handleSelectVehicle}
        />
        <CompanyContainer handleSelectLimit={handleSelectLimit} />
        <DataContainer
          distance={distance}
          emissions={emissions}
          money={money}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
