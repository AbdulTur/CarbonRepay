import React from 'react';
import '../styles/AboutSection.css';

function AboutSection() {
  return (
    <div className="about-section">
      <div className="about-text">
        <h3>About</h3>
        <p>
          This web application calculates the carbon emissions and money to be
          donated based on the distance traveled by different vehicles. The
          calculated sum should be donated to{' '}
          <a href="https://carbonfund.org" target="_blank" rel="noreferrer">
            carbonfund.org
          </a>{' '}
          to help offset carbon emissions and support a more sustainable future.
        </p>
      </div>
      <div className="how-to-use-text">
        <h3>How to Use</h3>
        <p>
          To use this application, first select a vehicle type (Truck, Van, or Trailer) and enter the distance traveled. Next, choose the size of the company (Small, Medium, or Large) to determine the carbon emissions limit. The application will then calculate the carbon emissions and the amount of money to be donated based on the distance traveled by the selected vehicle.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
