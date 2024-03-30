import React from "react";
import "../../components/WeatherData/WeatherData.css";
const WeatherData = ({ name, temp, icon, description }) => {
  return (
    <div className="ml-5 w-full mt-36">
      <div className="font-edit">{name}</div>{" "}
      
        <div className="temperature font-edit">{temp}°C</div>
        <div className=" flex gap-2 items-center ">
      <div className="condition">{description}</div><div>
          <img src={icon} alt="weather-icon" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
