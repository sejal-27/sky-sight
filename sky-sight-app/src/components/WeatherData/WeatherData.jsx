import React, { Children } from "react";
import "../../components/WeatherData/WeatherData.css";
import WeatherIcon from "../../utils/WeatherIcons";
const WeatherData = ({
  name,
  temp,
  icon,
  description,
  unit,
  wind,
  clouds,
  // rain,
  humidity,
  // , condition
}) => {
  // console.log(condition, "condition");


  return (
    <div className="w-full flex-col items-center mt-20 sm:flex sm:flex-row gap-6 ">
      <div className="flex flex-col">
        <div className="font-edit">{name}</div>{" "}
        <div className="temperature font-edit">
          <p>
            Temperature: {temp} {unit === "metric" ? "°C" : "°F"}
          </p>
        </div>
        <div className="flex flex-row items-center">
        <div className="condition"><img src={icon} alt="weather-icon" /></div>
        <div className="condition condition1">{description}</div></div>
        <div className="condition">Wind speed: {wind}  {unit === "metric" ? "meter/sec" : "miles/hour"}</div>
        <div className="condition">Cloudiness: {clouds}%</div>
        <div className="condition">Humidity: {humidity}%</div>
      </div>
      <div className="ml-0 sm:flex sm:items-center sm:justify-center lg:ml-20 xl:ml-32">
 
      </div>
        {/* <WeatherIcon condition={condition} /> */}
      </div>

  );
};

export default WeatherData;
