import React from 'react';
import { motion } from 'framer-motion';

const DrinkCard = ({ item }) => {
    const isSangria = item.type === 'Sangrias';
    const isBeer = item.type === 'Beer';
    const ingredients = item.ingredients || [];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="drink-card" 
            style={{ padding: '2rem' }}
        >
            <div className="drink-card-header" style={{ marginBottom: '2rem' }}>
                <h3 className="drink-card-title">{item.name}{isSangria ? ' PITCHER' : ''}</h3>
                <div className="drink-card-meta">
                    <span>{isSangria ? 'SERVES 5-6' : 'SERVES 1'}</span>
                    <span style={{ marginLeft: '1rem' }}>${item.price}</span>
                </div>
            </div>

            {!isBeer && ingredients.length > 0 && (
                <div className="drink-card-section">
                    <h4 className="drink-card-section-title">INGREDIENTS</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                        {ingredients.map((ing, idx) => (
                            <span key={idx} className="ingredient-tag" style={{
                                border: '1px solid #444',
                                padding: '0.2rem 0.6rem',
                                fontSize: '0.8rem',
                                letterSpacing: '1px'
                            }}>
                                {ing.toUpperCase()}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div className="drink-card-section" style={{ marginTop: '2rem' }}>
                <h4 className="drink-card-section-title">FLAVOR PROFILE</h4>
                <p className="flavor-profile" style={{ marginTop: '0.5rem', lineHeight: '1.4' }}>{item.description}</p>
            </div>
        </motion.div>
    );
};

export default DrinkCard;
