import React from 'react';
import MenuCard from './MenuCard';

const ShelfView = ({ title, items }) => {
  return (
    <section className="shelf-section">
      <div className="shelf-header">
        <h2 className="shelf-title">{title}</h2>
        <div className="shelf-line"></div>
      </div>

      <div className="shelf-container">
        {items.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>

      <style>{`
        .shelf-section {
          margin-bottom: 4rem;
          padding: 0 2rem;
        }

        .shelf-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .shelf-title {
          font-size: 3.5rem;
          white-space: nowrap;
          color: var(--color-text-dark);
        }

        .shelf-line {
          height: 8px;
          background: var(--color-text-dark);
          flex: 1;
        }

        .shelf-container {
          display: flex;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 1rem 0 2rem 0;
          gap: 2rem;
          scrollbar-width: none; /* Firefox */
        }

        .shelf-container::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }
      `}</style>
    </section>
  );
};

export default ShelfView;
