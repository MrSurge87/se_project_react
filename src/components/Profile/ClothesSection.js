
import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({onSelectCard, onCreate, clothingItems, onAddItem}) => {
    const userClothing = clothingItems.filter((item) => {
        return item.weather;
    });

    return (
        <div className="profile__card-items">
            {userClothing.map((item) => {
                return (
                <ItemCard 
                item={item} 
                key={item?._id ?? item?.id} 
                onSelectCard={onSelectCard} 
                onCreate={onCreate}
                onAddItem={onAddItem}
                 />
                );
            })}
        </div>
    );
}

export default ClothesSection;
