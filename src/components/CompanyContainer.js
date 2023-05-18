import React, { useState } from 'react';
import '../styles/CompanyContainer.css';

function CompanyContainer({ handleSelectLimit }) {
  const [selectedButton, setSelectedButton] = useState(null);
  const [limit, setLimit] = useState('');

  const handleClick = (button, value) => {
    setSelectedButton(button);
    handleSelectLimit(value);
    setLimit(value);
  };

  return (
    <div className="container company-container">
      <h2>Company</h2>
      <div className="button-group">
        <button
          className={`company-btn${selectedButton === 'small' ? ' active' : ''}`}
          onClick={() => handleClick('small', '1903')}
        >
          Small
        </button>
        <button
          className={`company-btn${selectedButton === 'medium' ? ' active' : ''}`}
          onClick={() => handleClick('medium', '1080000')}
        >
          Medium
        </button>
        <button
          className={`company-btn${selectedButton === 'large' ? ' active' : ''}`}
          onClick={() => handleClick('large', '2880000')}
        >
          Large
        </button>
      </div>
      <div className="limit">
        <span>Limit: </span>
        <span>{limit}</span>
        {limit && <span>{` Tons`}</span>} {/* Add an extra space before "Tons" */}
      </div>
    </div>
  );
}

export default CompanyContainer;
