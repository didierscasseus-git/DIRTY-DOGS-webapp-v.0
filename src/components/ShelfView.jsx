import React from 'react';
import { motion } from 'framer-motion';
import MenuCard from './MenuCard';

const itemVariant = {
  hidden: { opacity: 0, x: 50 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 20 
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ShelfView = ({ title, items }) => {
  return (
    <section className="shelf-section">
      <div className="shelf-header">
        <h2 className="shelf-title">{title}</h2>
        <div className="shelf-line"></div>
      </div>

      <motion.div 
        className="shelf-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        {items.map(item => (
          <motion.div key={item.id} variants={itemVariant} className="shelf-item-wrapper">
            <MenuCard item={item} />
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        .shelf-section {
          margin-bottom: 6rem;
          padding: 0 calc(2rem + env(safe-area-inset-left));
        }

        .shelf-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .shelf-title {
          font-family: var(--font-header);
          font-size: clamp(2.5rem, 8vw, 4rem);
          white-space: nowrap;
          color: var(--color-text-dark);
          letter-spacing: -1px;
        }

        .shelf-line {
          height: 1px;
          background: var(--color-divider);
          flex: 1;
        }

        .shelf-container {
          display: flex;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 1rem 1rem 3rem 0;
          gap: 2rem;
          scrollbar-width: none;
          scroll-snap-type: x proximity;
          -webkit-overflow-scrolling: touch;
        }

        .shelf-container::-webkit-scrollbar {
          display: none;
        }

        .shelf-item-wrapper {
          scroll-snap-align: start;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};

export default ShelfView;
