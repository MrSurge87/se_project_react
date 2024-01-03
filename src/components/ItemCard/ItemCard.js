import "./ItemCard.css";


const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div>
      <div className="card_name">{item.name}</div>
        <img
          src={item.imageUrl}
          className="card_image"
          onClick={() => onSelectCard(item)}
          alt="garment"
        />
      </div>
      
    </div>
  );
};

export default ItemCard;
