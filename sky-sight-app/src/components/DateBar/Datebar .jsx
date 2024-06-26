import { defaults } from "autoprefixer";
import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import "../DateBar/DateBar.css"

const DateBar = () => {
  const [currentDT, setCurrentDT] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDT(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return <div className="date-text flex justify-center">{currentDT.toLocaleString('en-US', { 
    weekday: 'long', 
    year: 'numeric',
    month: 'long',
    day: 'numeric', 
  
  })}</div>;
};

export default DateBar;
