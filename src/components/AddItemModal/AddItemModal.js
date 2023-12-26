import React, {useState, } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({handleCloseModal, onAddItem, isOpen}) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({name, link})
  }

    return (
        <ModalWithForm title="New garment" onClose={handleCloseModal} isOpen={isOpen} onSubmit={ handleSubmit} buttonText="Add Garment">
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
              minLength="1"
              maxLength="30"
              placeholder="Image URL"
              id="input-url"
              value={link}
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
              className="weather-type-button"
              type="radio"
              id="hot"
              value="hot"
            />
            <label className="radio-label" name="weather-type-button" >Hot</label>
          </div>
          <div>
            <input type="radio" id="warm" value="warm" name="weather-type-button" className="weather-type-button" />
            <label className="radio-label"> Warm</label>
          </div>
          <div>
            <input type="radio" id="cold" value="cold" name="weather-type-button" className="weather-type-button"/>
            <label className="radio-label"> Cold</label>
          </div>
        </div>
      </ModalWithForm>
    )
  }
export default AddItemModal;