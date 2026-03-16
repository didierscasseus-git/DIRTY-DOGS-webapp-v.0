import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';
import { menuData } from './data/menuData';
import ShelfView from './components/ShelfView';
import ComboCard from './components/ComboCard';
import DeliverySection from './components/DeliverySection';
import DrinkCard from './components/DrinkCard';
import FoodItem from './components/FoodItem';
import EventFeed from './components/EventFeed';

const Nav = ({ transparent = false, lightText = false, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const textColor = transparent && !lightText ? '#000' : '#fff';
  
  const handleNav = (v) => {
    setView(v);
    setIsOpen(false);
  };

  return (
    <nav className={`header-nav ${transparent ? 'nav-transparent' : 'nav-dark'}`}>
      <a href="#" className="nav-logo-small" onClick={(e) => { e.preventDefault(); handleNav('home'); }}>
        <img src="/logo_zoomed.png" alt="Dirty Dogs Logo" style={{ filter: transparent && !lightText ? 'invert(1)' : 'none' }} />
      </a>
      
      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} style={{ color: textColor }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
        </svg>
      </button>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNav('home'); }} style={{ color: textColor }}>HOME</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNav('food'); }} style={{ color: textColor }}>MENU</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNav('drink'); }} style={{ color: textColor }}>DRINKS</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNav('events'); }} style={{ color: textColor }}>EVENTS</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNav('order'); }} className="order-online-btn" style={{ borderColor: textColor, color: textColor }}>ORDER ONLINE</a>
      </div>
    </nav>
  );
};

const SocialIcons = () => (
  <div className="social-icons">
    <a href="#" aria-label="Facebook">
      <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" /></svg>
    </a>
    <a href="https://www.instagram.com/eatdirtydogs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" /></svg>
    </a>
    <a href="#" aria-label="Twitter">
      <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
    </a>
  </div>
);

function App() {
  const [view, setView] = useState('home'); // 'home', 'food', 'drink', 'order'

  const renderHome = () => {
    // Take specific food items as "Iconic Plates"
    const iconicPlateIds = ['b1', 'b2', 'p5', 'p1'];
    const iconicPlates = iconicPlateIds.map(id => menuData.food.find(item => item.id === id)).filter(Boolean);

    // Fallback if less than 4 items
    if (iconicPlates.length < 4) {
      const moreItems = menuData.food.filter(item => !iconicPlateIds.includes(item.id));
      while (iconicPlates.length < 4 && moreItems.length > 0) {
        iconicPlates.push(moreItems.shift());
      }
    }

    return (
      <motion.div 
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="home-container"
      >
        <Nav transparent={true} setView={setView} />

        {/* Hero Section */}
        <section className="nostalgic-hero">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hero-content"
          >
            <div className="hero-cta-group">
              <button className="hero-cta-btn" onClick={() => setView('drink')}>
                THE BAR
              </button>
              <button className="hero-cta-btn" onClick={() => setView('food')}>
                THE CANTEEN
              </button>
            </div>
          </motion.div>
        </section>

        {/* Iconic Plates Section */}
        <section className="plates-section">
          <div className="plates-grid">
            {iconicPlates.map((plate, index) => (
              <motion.div 
                key={plate.id} 
                className="plate-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="plate-image-container">
                  <img src={plate.image || '/ASSETS/tacos plate.png'} alt={plate.name} />
                </div>
                <div className="plate-info">
                  <p className="plate-description">{plate.name} - {plate.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Visit Us Section */}
        <section className="visit-section">
          <div className="visit-banner" style={{ backgroundImage: "url('/ASSETS/Screenshot 2026-02-22 204246.png')" }}>
            {/* The big sign image from the design */}
          </div>
          <div className="visit-details">
            <h2 style={{ fontSize: '4rem' }}>VISIT US AT THE CORNER</h2>
            <div className="visit-info-grid">
              <div className="address-container">
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Dirty Dogs Resto-Bar</p>
                <p>3685 Boul. Saint-Laurent,</p>
                <p>Montreal, QC H2X 2V5</p>

                <div className="map-placeholder" style={{ marginTop: '2rem', backgroundImage: "url('/ASSETS/map.png')", backgroundSize: 'cover' }}></div>
              </div>
              <div className="hours-container">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>HOURS</h3>
                <p style={{ opacity: 0.8 }}>Mon – Wed: 12:00 PM - 1:00 AM</p>
                <p style={{ opacity: 0.8 }}>Thu – Sat: 12:00 PM - 3:00 AM</p>
                <p style={{ opacity: 0.8 }}>Sun: 12:00 PM - 1:00 AM</p>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Dine-in, Takeout & Delivery available via Uber Eats & DoorDash.</p>
              </div>
            </div>
          </div>
        </section>

        <footer style={{ background: '#000' }}>
          <div>
            <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>© Copyright Dirty Dogs, LLC</p>
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <SocialIcons />
            <div style={{ fontFamily: 'var(--font-header)', fontSize: '2rem' }}>DIRTY DOGS</div>
          </div>
        </footer>
      </motion.div>
    );
  };

  const renderOrder = () => {
    return (
      <motion.div 
        key="order"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="order-view"
      >
        <Nav transparent={false} setView={setView} />
        <div className="order-container">
          <h2 className="order-title">SECURE THE BAG</h2>
          <p className="order-subtitle">CHOOSE YOUR DELIVERY PLATFORM</p>
          
          <div className="order-grid">
            <a href="https://www.ubereats.com/ca-fr/store/dirty-dogs-st-laurent/F2U9RYCPUUKp6rfh7nt8ZQ?gad_source=1&gad_campaignid=22675284634&gbraid=0AAAAA_oynLRrnzMKa0gaXyU4fjXDPKxXi&gclid=CjwKCAjwyMnNBhBNEiwA-Kcgu9GR2UsSnkZJLAmpnX69SH0qwXGUs_Zu2NB_CivXD-0VcdvH1QeF5xoCUc4QAvD_BwE" 
               target="_blank" rel="noopener noreferrer" className="order-card uber">
              <img src="/ASSETS/Uber_Eats_2020_logo.svg.png" alt="Uber Eats" className="order-card-img" />
            </a>

            <a href="https://www.doordash.com/en-CA/store/dirty-dogs-32295739/" 
               target="_blank" rel="noopener noreferrer" className="order-card doordash">
              <img src="/ASSETS/doordash-logo-11609359542nd1g660y5t.webp" alt="DoorDash" className="order-card-img" />
            </a>
          </div>

          <button className="cta-button" style={{ marginTop: '4rem' }} onClick={() => setView('home')}>
            BACK TO HOME
          </button>
        </div>

        <footer style={{ borderTop: '1px solid #333', padding: '4rem', background: '#000', marginTop: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
            <SocialIcons />
            <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>© {new Date().getFullYear()} Dirty Dogs Resto-Bar</p>
          </div>
        </footer>
      </motion.div>
    );
  };

  const renderContent = () => {
    const isFood = view === 'food';
    const items = isFood ? menuData.food : menuData.drinks;

    const sections = isFood
      ? Array.from(new Set(items.map(i => i.category)))
      : Array.from(new Set(items.map(i => i.type)));

    return (
      <motion.div 
        key="menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="menu-view" 
        style={{ paddingTop: '8rem', background: '#000', color: '#fff', minHeight: '100vh' }}
      >
        <Nav transparent={false} setView={setView} />

        <div style={{ textAlign: 'left', padding: '0 4rem', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(4rem, 10vw, 10rem)', lineHeight: '0.8', margin: '0' }}>{isFood ? 'THE CANTEEN' : 'THE BAR'}</h2>
          <p style={{ fontFamily: 'var(--font-sub)', fontSize: '1.2rem', letterSpacing: '4px', marginTop: '1rem', color: '#888', textTransform: 'uppercase' }}>
            {!isFood && 'COCKTAILS & CRAFT BEERS'}
          </p>
        </div>

        {isFood ? (
          <div className="industrial-menu">
            {sections.map(section => (
              <div key={section} className="industrial-section">
                <h3 className="industrial-category-title">{section}</h3>
                {items.filter(i => i.category === section).map(item => (
                  <FoodItem key={item.id} item={item} />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="drinks-menu">
            {sections.map(section => (
              <div key={section} style={{ marginBottom: '6rem' }}>
                <h3 className="industrial-category-title" style={{ marginLeft: '4rem', marginRight: '4rem' }}>{section}</h3>
                <div className="drinks-grid">
                  {items.filter(i => i.type === section).map(item => (
                    <DrinkCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <footer style={{ borderTop: '1px solid #333', padding: '4rem', background: '#000' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
            <SocialIcons />
            <div style={{ textAlign: 'right' }}>
              <button
                className="cta-button"
                style={{ fontSize: '1rem', marginBottom: '2rem' }}
                onClick={() => setView('home')}
              >
                BACK TO HOME
              </button>
              <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>© {new Date().getFullYear()} Dirty Dogs Resto-Bar</p>
            </div>
          </div>
        </footer>
      </motion.div>
    );
  };

  return (
    <div className="app-root">
      <AnimatePresence mode="wait">
        {view === 'home' && renderHome()}
        {(view === 'food' || view === 'drink') && renderContent()}
        {view === 'order' && renderOrder()}
        {view === 'events' && (
          <motion.div
            key="events"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Nav transparent={true} lightText={true} setView={setView} />
            <EventFeed />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .app-root {
          min-height: 100vh;
        }
        .menu-view::-webkit-scrollbar {
          display: none;
        }
        .combos-section div::-webkit-scrollbar {
          height: 4px;
        }
        .combos-section div::-webkit-scrollbar-thumb {
          background: var(--color-accent);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

export default App;
