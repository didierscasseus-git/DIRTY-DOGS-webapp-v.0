import React from 'react';

const DeliverySection = () => {
  const partners = [
    { name: 'UberEats', color: '#06C167', url: '#' },
    { name: 'DoorDash', color: '#FF3008', url: '#' },
    { name: 'SkipTheDishes', color: '#B41C2A', url: '#' }
  ];

  return (
    <div className="delivery-section">
      <h3 className="delivery-title">ORDER ONLINE</h3>
      <div className="delivery-partners">
        {partners.map(partner => (
          <a
            key={partner.name}
            href={partner.url}
            className="partner-btn"
            style={{ '--partner-color': partner.color }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="partner-name">{partner.name}</span>
          </a>
        ))}
      </div>

      <style>{`
        .delivery-section {
          margin-top: 4rem;
          padding: 2rem;
          text-align: center;
          width: 100%;
          max-width: 1000px;
        }

        .delivery-title {
          font-family: var(--font-header);
          font-size: 3rem;
          margin-bottom: 3rem;
          color: var(--color-text-dark);
        }

        .delivery-partners {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .partner-btn {
          text-decoration: none;
          background: white;
          border: var(--border-thick);
          padding: 1.5rem 2rem;
          color: var(--color-text-dark);
          font-family: var(--font-header);
          font-size: 1.5rem;
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          min-width: 200px;
          box-shadow: 6px 6px 0px var(--partner-color);
        }

        .partner-btn:hover {
          transform: translateY(-2px);
          box-shadow: 8px 8px 0px var(--partner-color);
        }

        .partner-btn:active {
          transform: translateY(2px);
          box-shadow: 2px 2px 0px var(--partner-color);
        }

        .partner-name {
          position: relative;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .delivery-partners {
            gap: 1.5rem;
          }
          .partner-btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default DeliverySection;
