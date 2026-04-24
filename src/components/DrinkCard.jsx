import React from 'react';
import { motion } from 'framer-motion';

const DrinkCard = ({ item }) => {
    const hasPitcher = !!item.pitcher_price;
    const isSangria = item.type === 'Sangrias';
    const isBeer = item.type === 'Beer';
    const ingredients = item.ingredients || [];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="drink-card glass-card" 
            style={{ padding: '2rem', border: '1px solid var(--glass-border)' }}
        >
            <div className="drink-card-header" style={{ marginBottom: '2rem' }}>
                <h3 className="drink-card-title" style={{ fontFamily: 'var(--font-header)', fontSize: '2.5rem', lineHeight: '1' }}>
                    {item.name}
                    {hasPitcher && !isSangria && <span style={{ fontSize: '1rem', verticalAlign: 'middle', marginLeft: '1rem', color: 'var(--color-action)' }}>+ PITCHER OPTION</span>}
                    {isSangria && ' PITCHER'}
                </h3>
                <div className="drink-card-meta" style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                    <span>{(isSangria || hasPitcher) ? 'SERVES 1-6' : 'SERVES 1'}</span>
                    <span style={{ color: 'var(--color-action)', fontWeight: 'bold' }}>
                        ${item.price}
                        {hasPitcher && ` / $${item.pitcher_price} PITCHER`}
                    </span>
                </div>
            </div>


            {!isBeer && ingredients.length > 0 && (
                <div className="drink-card-section">
                    <h4 className="drink-card-section-title" style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.4)' }}>INGREDIENTS</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                        {ingredients.map((ing, idx) => (
                            <span key={idx} className="ingredient-tag" style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '0.3rem 0.8rem',
                                borderRadius: '10px',
                                fontSize: '0.75rem',
                                letterSpacing: '0.5px'
                            }}>
                                {ing.toUpperCase()}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div className="drink-card-section" style={{ marginTop: '2rem' }}>
                <h4 className="drink-card-section-title" style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.4)' }}>FLAVOR PROFILE</h4>
                <p className="flavor-profile" style={{ marginTop: '0.8rem', lineHeight: '1.6', fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>{item.description}</p>
            </div>
        </motion.div>
    );
};

export default DrinkCard;
