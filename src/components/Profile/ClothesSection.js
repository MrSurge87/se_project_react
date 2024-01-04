
import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({onSelectCard, handleCreateModal, clothingItems}) => {
    const userClothing = clothingItems.filter((item) => {
        return item.weather;
    });

    return (
        <div className="profile__card-items">
            {userClothing.map((item) => {
                return (
                <ItemCard item={item} onSelectCard={onSelectCard} key={item?._id} />
                );
            })}
        </div>
    );
}

export default ClothesSection;
