import React, { useContext } from 'react';
import "./Weather.css";
import {weatherOptions} from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";


const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const {currentTemperatureUnit} = useContext(CurrentTemperatureUnitContext);

  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const imageSrcUrl = weatherOption.url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info"> {weatherTemp}° {currentTemperatureUnit}</div>
      <img src={imageSrcUrl} className="weather_image" alt="weather"></img>
    </section>
  );
};


export default WeatherCard;
