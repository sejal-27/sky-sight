import React, { useState } from 'react';

const TempToggle = ({ onChange }) => {
  const [unit, setUnit] = useState('metric');

  const handleToggle = () => {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(newUnit);
    onChange(newUnit);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={unit === 'imperial'} onChange={handleToggle} />
        Imperial
      </label>
    </div>
  );
};

export default TempToggle;
