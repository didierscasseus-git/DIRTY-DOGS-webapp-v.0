import React, { useState } from 'react';

const MenuCard = ({ item }) => {
  const [format, setFormat] = useState('burger');
  const hasPitcher = !!item.pitcher_price;
  const hasBundle = !!item.bundle_price;

  const displayName = item.has_dog_option && format === 'dog'
    ? item.name.replace('Burger', 'Dog')
    : item.name;

  return (
    <div className="menu-card">
      <div className="card-top">
        <h3 className="item-name">{displayName}</h3>
        <div className="price-stack">
          <span className="item-price">${item.price}</span>
          {hasPitcher && <span className="alt-price">JUG: ${item.pitcher_price}</span>}
          {hasBundle && <span className="alt-price">{item.bundle_qty} SHOTS: ${item.bundle_price}</span>}
        </div>
      </div>

      <div className="item-image-container">
        <img src={item.image || 'https://via.placeholder.com/300x200?text=DIRTY+DOGS'} alt={item.name} className="item-image" />
        {item.is_greasy && <div className="sticker-tag greasy-tag">HANGOVER CURE</div>}
      </div>

      <p className="item-description">{item.description}</p>

      {item.has_dog_option && (
        <div className="size-selector" style={{ marginTop: '0.5rem' }}>
          <button
            className="cta-button size-btn"
            style={{
              background: format === 'burger' ? 'var(--color-text-dark)' : 'var(--color-shelf-white)',
              color: format === 'burger' ? 'white' : 'var(--color-text-dark)',
              border: '2px solid var(--color-text-dark)'
            }}
            onClick={() => setFormat('burger')}
          >
            BURGER
          </button>
          <button
            className="cta-button size-btn"
            style={{
              background: format === 'dog' ? 'var(--color-text-dark)' : 'var(--color-shelf-white)',
              color: format === 'dog' ? 'white' : 'var(--color-text-dark)',
              border: '2px solid var(--color-text-dark)'
            }}
            onClick={() => setFormat('dog')}
          >
            HOT DOG
          </button>
        </div>
      )}

      {item.type && <div className="item-type-tag">{item.type}</div>}

      <style>{`
        .menu-card {
          min-width: 300px;
          background: var(--color-shelf-white);
          border: var(--border-thick);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          position: relative;
          transition: transform 0.2s;
          box-shadow: 10px 10px 0px var(--color-text-dark);
          margin-bottom: 20px;
          margin-right: 20px;
        }

        .menu-card:hover {
          transform: translateY(-5px) rotate(1deg);
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 3px solid var(--color-text-dark);
          padding-bottom: 0.5rem;
        }

        .price-stack {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.2rem;
        }

        .item-name {
          font-size: 1.8rem;
          color: var(--color-text-dark);
        }

        .item-price {
          font-family: var(--font-header);
          font-size: 2rem;
          color: var(--color-action);
          line-height: 1;
        }

        .alt-price {
          font-family: var(--font-header);
          font-size: 1.2rem;
          color: var(--color-text-dark);
          opacity: 0.8;
        }

        .item-image-container {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border: 2px solid var(--color-text-dark);
          position: relative;
          overflow: hidden;
        }

        .item-image {
          width: 90%;
          height: auto;
          object-fit: contain;
          transition: transform 0.3s;
        }

        .menu-card:hover .item-image {
          transform: scale(1.1);
        }

        .item-description {
          font-family: var(--font-body);
          font-size: 0.9rem;
          line-height: 1.4;
          color: var(--color-text-dark);
        }

        .sticker-tag {
          position: absolute;
          top: 10px;
          right: -10px;
          background: var(--color-action);
          color: white;
          padding: 0.3rem 0.8rem;
          font-family: var(--font-header);
          font-size: 1rem;
          transform: rotate(15deg);
          border: 2px solid var(--color-text-dark);
          z-index: 5;
        }

        .greasy-tag {
          background: #FFD700;
          color: var(--color-text-dark);
        }

        .item-type-tag {
          align-self: flex-start;
          background: var(--color-text-dark);
          color: white;
          padding: 0.2rem 0.6rem;
          font-family: var(--font-header);
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        .size-selector {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .size-btn {
          flex: 1;
          padding: 0.5rem;
          font-family: var(--font-header);
          font-size: 0.9rem;
          /* Base styles from .neumorphic-btn-light */
          border-radius: 10px; /* Smaller radius for small buttons */
        }

        .add-to-cart-btn {
          margin-top: auto;
          padding: 0.8rem;
          font-size: 1.2rem;
          width: 100%;
          /* Base styles from .neumorphic-btn */
        }

        .add-to-cart-btn:hover {
            /* Handled by utility */
        }
      `}</style>
    </div>
  );
};

export default MenuCard;
