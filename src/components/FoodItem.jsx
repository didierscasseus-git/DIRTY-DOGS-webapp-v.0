import React from 'react';

const FoodItem = ({ item }) => {
    return (
        <div className="industrial-item-container">
            <div className="industrial-item">
                <div className="industrial-item-main">
                    <span className="industrial-item-name">{item.name}</span>
                    <div className="industrial-item-dots"></div>
                </div>
                <span className="industrial-item-price">${item.price.toFixed(2)}</span>
            </div>
            <p className="industrial-item-description">{item.description}</p>
        </div>
    );
};

export default FoodItem;
