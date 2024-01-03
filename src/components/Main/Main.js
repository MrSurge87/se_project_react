import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import "./Main.css";
import { CurrentTemperatureUnitContext } from "../Contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard }) {
  const {currentTemperatureUnit} = useContext(CurrentTemperatureUnitContext);
    const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999
    const tempInF = currentTemperatureUnit === 'F' ? temp : temp * 1.8 + 32
    // const tempInF = weatherTemp.temperature;

  const weatherType = useMemo(() => {
      if (tempInF >= 86) {
        return "Hot";
      } else if (tempInF >= 66 && tempInF <= 85) {
        return "Warm";
      } else if (tempInF <= 65) {
        return "Cold";
      }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={false} type="cloudynight" weatherTemp={temp} />
      <section className="card_section" id="card-section">
        Today is {temp}° {currentTemperatureUnit} / You may want to wear:
        <div className="card_items">
          {filteredCards.map((item, index) => {
            return (
            <ItemCard
              item={item}
              onSelectCard={onSelectCard}
              key={`item-card-${index}`}
            /> );
})}
        </div>
      </section>
    </main>
  );
}

export default Main;
