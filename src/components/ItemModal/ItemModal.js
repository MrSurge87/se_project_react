import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={"modal"}>
      <div className="preview-image-content">
      <button className="preview-image-close" type="button" onClick={onClose}></button>
        <img className="image-preview" src={selectedCard.link} alt="image-preview"></img>
        
        <div className="preview-image-name"> {selectedCard.name} </div>
        <div className="preview-image-weather-type"> Weather Type: {selectedCard.weather} </div>
      </div>
    </div>
  );
};

export default ItemModal;
