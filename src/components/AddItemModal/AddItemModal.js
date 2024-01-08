import React, {useState, } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({handleCloseModal, onAddItem, isOpen}) => {
  
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const [imageUrl, setImageUrl] = useState("");
  const handleUrlChange = (e) => {
    setImageUrl(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({name, imageUrl, weatherType})
    
  }

  const [weatherType, setWeatherType] = useState("");
  const handleWeatherTypeChange = (e) => {
    setWeatherType(e.target.value);
  }


    return (
        <ModalWithForm title="New garment" 
        onClose={handleCloseModal} 
        isOpen={isOpen} 
        onSubmit={ handleSubmit} 
        buttonText="Add Garment">
        <ul className="inputs">
          <p className="input-header">Name</p>
          <li>
            <input
              className="input"
              type="text"
              name="name"
              minLength="1"
              maxLength="30"
              placeholder="Name"
              value={name} 
              onChange={handleNameChange}
            />
          </li>
          <p className="input-header">Image</p>
          <li>
            <input
              className="input"
              type="url"
              name="url"
              placeholder="Image URL"
              id="input-url"
              value={imageUrl}
              onChange={handleUrlChange}
            />
          </li>
        </ul>

        <p className=" weather-type-header input-header">
          Select the weather type:
        </p>
        <div className="weather-inputs">
          <div>
            <input
              name="weather-type-button"
              className="weather-type-button"
              type="radio"
              id="hot"
              value="hot"
              checked={weatherType === "hot"}
              onChange={handleWeatherTypeChange}
            />
            <label className="radio-label" name="weather-type-button" >Hot</label>
          </div>
          <div>
            <input 
            name="weather-type-button" 
            className="weather-type-button"
            type="radio" 
            id="warm" 
            value="warm" 
            checked={weatherType === "warm"}
            onChange={handleWeatherTypeChange}
            />
            <label className="radio-label"> Warm</label>
          </div>
          <div>
            <input 
             me="weather-type-button" 
             className="weather-type-button"
             type="radio" 
             id="cold"
             value="cold"
             checked={weatherType === "cold"}
             onChange={handleWeatherTypeChange} 
            />
            <label className="radio-label"> Cold</label>
          </div>
        </div>
      </ModalWithForm>
    )
  }
export default AddItemModal;