import React, { useState } from 'react';
import "./TempToggle.css";

const TempToggle = ({ onChange }) => {
  const [unit, setUnit] = useState('metric');

  const handleToggle = () => {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(newUnit);
    onChange(newUnit);
  };

  return (
    <div className="mt-4 sm:mt-0">
      <div className="switches-container">
        <input type="radio" id="switchMetric" name="switchUnit" value="metric" checked={unit === 'metric'} onChange={handleToggle} />
        <input type="radio" id="switchImperial" name="switchUnit" value="imperial" checked={unit === 'imperial'} onChange={handleToggle} />
        <label htmlFor="switchMetric">Celcius</label>
        <label htmlFor="switchImperial">Fahrenheit</label>
        <div className="switch-wrapper">
          <div className="switch">
            <div>{unit === 'metric' ? 'Celcius' : 'Fahrenheit'}</div>
            <div>{unit ==='Imperial' ? 'Celcius' : 'Fahrenheit'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempToggle;
