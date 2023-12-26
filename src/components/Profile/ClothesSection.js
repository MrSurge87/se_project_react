import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({onSelectCard, clothingItems}) => {
    const filter = clothingItems.filter((item) => {
        return item.weather;
    });

    return (
        <div className="profile__card-items">
            {filter.map((item) => {
                <ItemCard item={item} onSelectCard={onSelectCard} key={item.id} />
            })}
        </div>
    );
}

export default ClothesSection;