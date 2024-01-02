import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import "./Main.css";
import { CurrentTemperatureUnitContext } from "../Contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard }) {
  const {currentTemperatureUnit} = useContext(CurrentTemperatureUnitContext);
    const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999

  const weatherType = useMemo(() => {
    if (temp === 'F') {
      if (temp >= 86) {
        return "Hot";
      } else if (temp >= 66 && temp <= 85) {
        return "Warm";
      } else if (temp <= 65) {
        return "Cold";
      }
    } else if (temp === 'C') {
      if (temp >= 54* 5/9) {
        return "Hot";
      } else if (temp >= 34 * 5/9 && temp >= 54 * 5/9) {
        return "Warm";
      } else if(temp >= 33 * 5/9) {
        return "Cold";
      }
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
