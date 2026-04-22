import React from 'react';

const ComboCard = ({ combo }) => {
  return (
    <div className="combo-card">
      <div className="combo-badge">COMBO SAVINGS</div>
      <h3 className="combo-name">{combo.name}</h3>
      <div className="combo-items">
        {combo.items_included.map((item, index) => (
          <div key={index} className="combo-item-row">
            <span className="bullet">⚡</span> {item}
          </div>
        ))}
      </div>
      <div className="combo-footer">
        <span className="combo-price">${combo.discount_price}</span>
        <button className="cta-button combo-add-btn">ADD TO ORDER</button>
      </div>

      <style>{`
        .combo-card {
          min-width: 320px;
          background: var(--color-shelf-white);
          color: var(--color-text-dark);
          border: var(--border-thick);
          padding: 2rem;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-right: 20px;
          box-shadow: 10px 10px 0px var(--color-text-dark);
        }

        .combo-badge {
          position: absolute;
          top: -15px;
          left: 20px;
          background: var(--color-action);
          color: white;
          padding: 0.3rem 1rem;
          font-family: var(--font-header);
          font-size: 1.2rem;
          transform: rotate(-2deg);
          border: 2px solid var(--color-text-dark);
        }

        .combo-name {
          font-family: var(--font-header);
          font-size: 2.5rem;
          color: var(--color-text-dark);
          line-height: 1;
        }

        .combo-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .combo-item-row {
          font-family: var(--font-body);
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .combo-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 2px dashed var(--color-text-dark);
          padding-top: 1rem;
        }

        .combo-price {
          font-family: var(--font-header);
          font-size: 2.5rem;
        }

        .combo-add-btn {
          padding: 1rem 1.5rem;
          font-size: 1.2rem;
          min-height: 48px;
        }
      `}</style>
    </div>
  );
};

export default ComboCard;
