import React from "react";

const WeatherIcon = ({ condition }) => {
  const weatherIcons = {
    Clear: "/DayIcons/sun.svg",
    Clouds: "/DayIcons/cloudy.svg",
    Haze: "/DayIcons/fog.svg",
    Thunderstorm: "/DayIcons/storm.svg",
    Drizzle: "/DayIcons/drizzle.svg",
    Rain: "/DayIcons/heavy-rain.svg",
    Snow: "/DayIcons/snow.svg",
    Atmosphere: "/DayIcons/fog.svg",
  };

  const iconPath = weatherIcons[condition];

  return (
    <img
      src={iconPath}
      alt={condition}
      style={{ width: "100%", height: "auto"}}
          />
  );
};

export default WeatherIcon;
