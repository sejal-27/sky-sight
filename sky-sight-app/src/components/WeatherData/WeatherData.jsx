import React from "react";
import "../../components/WeatherData/WeatherData.css";
const WeatherData = ({ name, temp, icon, description, unit}) => {
 
  return (
    <div className="w-full mt-20">
      <div className="font-edit">{name}</div>{" "}
      
        <div className="temperature font-edit"><p>Temperature: {temp} {unit === 'metric' ? '°C' : '°F'}</p></div>
        <div className=" flex gap-2 items-center ">
      <div className="condition">{description}</div><div>
          <img src={icon} alt="weather-icon" className="icon" />
          
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
