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
          margin-top: 6rem;
          padding: 2rem calc(2rem + env(safe-area-inset-right)) 2rem calc(2rem + env(safe-area-inset-left));
          text-align: center;
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .delivery-title {
          font-family: var(--font-header);
          font-size: clamp(2.5rem, 10vw, 4rem);
          margin-bottom: 3rem;
          color: var(--color-text-dark);
          letter-spacing: -1px;
        }

        .delivery-partners {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .partner-btn {
          text-decoration: none;
          background: #FFFFFF;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-divider);
          padding: 1.2rem 2.5rem;
          color: var(--color-text-dark);
          font-family: var(--font-sub);
          font-weight: 700;
          font-size: 1.2rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          min-width: 220px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .partner-btn::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--partner-color);
          opacity: 0.8;
        }

        .partner-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .partner-btn:active {
          transform: scale(0.96);
        }
      `}</style>
    </div>
  );
};

export default DeliverySection;
