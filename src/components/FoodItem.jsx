import React from 'react';
import { motion as Motion } from 'framer-motion';

const FoodItem = ({ item }) => {
    return (
        <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="industrial-item-container"
        >
            <div className="industrial-item">
                <div className="industrial-item-main">
                    <span className="industrial-item-name">{item.name}</span>
                    <div className="industrial-item-dots"></div>
                </div>
                <span className="industrial-item-price">${item.price.toFixed(2)}</span>
            </div>
            <p className="industrial-item-description">{item.description}</p>
        </Motion.div>
    );
};

export default FoodItem;
