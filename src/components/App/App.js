// import logo from "../..logo.svg";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal.js";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import {
  getForecastWeather,
  parseWeatherData,
} from "../../utils/WeatherAPI.js";
import {CurrentTemperatureUnitContext} from "../Contexts/CurrentTemperatureUnitContext.js";
import {Switch, Route} from "react-router-dom";
import Profile from "../Profile/Profile.js";
import {getItems, postItems, deleteItems} from "../../utils/Api.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTempUnit] = useState('F');
  const [clothingItems, setClothingItems] = useState([]);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === 'F' ? setCurrentTempUnit('C'): setCurrentTempUnit('F');
  }

  const onAddItem = (values) => {
    const res = postItems(values);
    setClothingItems((items) => [res, ...items]);
    handleCloseModal();
  } ;

  useEffect(() => {
    getForecastWeather().then((data) => {
      setCity(data.name);
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    })
    .catch((err) => console.log(err));
    getItems().then(data => setClothingItems(data))
  }, []);

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider value={{currentTemperatureUnit, handleToggleSwitchChange}} >
        <Header onCreateModal={handleCreateModal} city={city} temp={temp} />
          <Switch>
            <Route exact path="/">
              <Main weatherTemp={temp} onSelectCard={handleSelectedCard} clothingItems={clothingItems} />
            </Route>
            <Route path="/profile"> 
              <Profile 
              onSelectCard={handleSelectedCard}
              onCreate={handleCreateModal}
              clothingItems={clothingItems}
              />
            </Route>
          </Switch>
        <Footer />
        {activeModal === "create" && <AddItemModal handleCloseModal={handleCloseModal} isOpen={activeModal === "create"} onAddItem={onAddItem} /> }
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
