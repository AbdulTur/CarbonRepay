import { createContext, useState } from 'react';

const CarbonDataContext = createContext({
  distance: 0,
  setDistance: () => {},
  emissions: 0,
  setEmissions: () => {},
  donationAmount: 0,
  setDonationAmount: () => {},
  limit: 0,
});

function CarbonDataProvider(props) {
  const [distance, setDistance] = useState(0);
  const [emissions, setEmissions] = useState(0);
  const [donationAmount, setDonationAmount] = useState(0);
  const limit = 2000; // set your limit here

  return (
    <CarbonDataContext.Provider
      value={{
        distance,
        setDistance,
        emissions,
        setEmissions,
        donationAmount,
        setDonationAmount,
        limit,
      }}
    >
      {props.children}
    </CarbonDataContext.Provider>
  );
}

export { CarbonDataContext, CarbonDataProvider };
