import React from 'react';
import { motion } from 'framer-motion';

const FoodItem = ({ item }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="food-list-item glass-card"
            style={{ padding: '1rem 1.5rem', marginBottom: '0.8rem', border: '1px solid var(--glass-border)' }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.3rem' }}>
                <h4 style={{ fontFamily: 'var(--font-header)', fontSize: '1.4rem', color: 'white', margin: 0 }}>{item.name}</h4>
                <span style={{ fontFamily: 'var(--font-header)', fontSize: '1.2rem', color: 'var(--color-action)' }}>${item.price}</span>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.4' }}>{item.description}</p>
        </motion.div>
    );
};

export default FoodItem;
