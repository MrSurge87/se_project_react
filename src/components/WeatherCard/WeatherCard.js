import "./Weather.css";
import {weatherOptions} from "../../utils/constants";
import CurrentTemperatureUnitContext from "../Contexts/CurrentTemperatureUnitContext";


const WeatherCard = ({ day, type, weatherTemp = "", CurrentTemperatureUnitContext }) => {

  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const imageSrcUrl = weatherOption.url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info"> {weatherTemp}° {CurrentTemperatureUnitContext}</div>
      <img src={imageSrcUrl} className="weather_image" alt="weather"></img>
    </section>
  );
};


export default WeatherCard;
