import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu as MenuIcon, 
  MapPin, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ShoppingBag,
  Info,
  Utensils,
  Beer,
  Globe,
  MessageCircle
} from 'lucide-react';
import './index.css';
import { menuData } from './data/menuData';

const SocialIcons = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <a href="#" className="social-icon-link" style={{ color: 'white', opacity: 0.6 }}><Globe size={20} /></a>
    <a href="#" className="social-icon-link" style={{ color: 'white', opacity: 0.6 }}><MessageCircle size={20} /></a>
  </div>
);
import ShelfView from './components/ShelfView';
import ComboCard from './components/ComboCard';
import DeliverySection from './components/DeliverySection';
import DrinkCard from './components/DrinkCard';
import FoodItem from './components/FoodItem';
import EventFeed from './components/EventFeed';

const Nav = ({ setView, transparent, lightText }) => {
  return (
    <nav className={`header-nav ${transparent ? 'is-transparent' : ''} ${lightText ? 'is-light' : ''}`}>
      <div className="nav-logo-small" onClick={() => setView('home')} style={{ cursor: 'pointer' }}>
        <img src="/logo_zoomed.png" alt="Logo" style={{ height: '30px' }} />
      </div>
      <div className="nav-actions">
        <button onClick={() => setView('food')} className="nav-icon-btn" title="Menu"><Utensils size={20} /></button>
        <button onClick={() => setView('drink')} className="nav-icon-btn" title="Drinks"><Beer size={20} /></button>
        <button onClick={() => setView('order')} className="nav-icon-btn" title="Order"><ShoppingBag size={20} /></button>
        <button onClick={() => setView('events')} className="nav-icon-btn" title="Events"><Calendar size={20} /></button>
      </div>
    </nav>
  );
};

const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: springTransition }
};

function App() {
  const location = useLocation();
  const getInitialView = () => {
    const path = location.pathname;
    if (path === '/menu' || path === '/food') return 'food';
    if (path === '/drinks' || path === '/drink') return 'drink';
    if (path === '/order' || path === '/order-online') return 'order';
    if (path === '/events') return 'events';
    return 'home';
  };
  const [view, setView] = useState(getInitialView);

  const renderHome = () => {
    const iconicPlateIds = ['b1', 'b2', 'p5', 'p1'];
    const iconicPlates = iconicPlateIds.map(id => menuData.food.find(item => item.id === id)).filter(Boolean);

    return (
      <motion.div 
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="home-container"
      >
        <Nav setView={setView} />

        {/* Hero Section */}
        <section className="nostalgic-hero">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...springTransition, delay: 0.2 }}
            className="hero-content glass-card"
          >
            {/* Title removed per user request */}
            {/* Subtitle removed per user request */}
            <div className="hero-cta-group">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hero-cta-btn" 
                style={{ borderRadius: '20px', fontSize: '1.2rem', padding: '1rem 2rem' }}
                onClick={() => setView('food')}
              >
                <ShoppingBag size={20} style={{ marginRight: '8px' }} />
                ORDER NOW
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hero-cta-btn" 
                style={{ borderRadius: '20px', fontSize: '1.2rem', padding: '1rem 2rem' }}
                onClick={() => setView('events')}
              >
                <Info size={20} style={{ marginRight: '8px' }} />
                EVENTS
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Iconic Plates Section */}
        <section className="plates-section">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="plates-grid"
          >
            {iconicPlates.map((plate) => (
              <motion.div 
                key={plate.id} 
                className="plate-card glass-card"
                variants={itemVariant}
              >
                <div className="plate-image-container">
                  <img src={plate.image || '/assets/tacos-plate.png'} alt={plate.name} />
                </div>
                <div className="plate-info">
                   <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plate.name}</h3>
                   <p className="plate-description" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>{plate.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Visit Us Section */}
        <section className="visit-section">
          <div className="visit-banner" style={{ backgroundImage: "url('/assets/visit-banner.png')" }}></div>
          <div className="visit-details">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={springTransition}
              style={{ fontSize: '4rem' }}
            >
              VISIT US AT THE CORNER
            </motion.h2>
            <div className="visit-info-grid">
              <div className="address-container">
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Dirty Dogs Resto-Bar</p>
                <p>3685 Boul. Saint-Laurent,</p>
                <p>Montreal, QC H2X 2V5</p>

                <div className="map-placeholder" style={{ marginTop: '2rem', backgroundImage: "url('/assets/map.png')", backgroundSize: 'cover' }}></div>
              </div>
              <div className="hours-container">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>HOURS</h3>
                <p style={{ opacity: 0.8 }}>Mon – Wed: 12:00 PM - 1:00 AM</p>
                <p style={{ opacity: 0.8 }}>Thu – Sat: 12:00 PM - 3:00 AM</p>
                <p style={{ opacity: 0.8 }}>Sun: 12:00 PM - 1:00 AM</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="view-footer">
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
        <Nav setView={setView} />
        <div className="order-container">
          <h2 className="order-title">ORDER ONLINE</h2>
          <p className="order-subtitle">PICK YOUR DELIVERY PLATFORM</p>
          
          <div className="order-grid">
            <a href="https://www.ubereats.com/ca-fr/store/dirty-dogs-st-laurent/F2U9RYCPUUKp6rfh7nt8ZQ?gad_source=1&gad_campaignid=22675284634&gbraid=0AAAAA_oynLRrnzMKa0gaXyU4fjXDPKxXi&gclid=CjwKCAjwyMnNBhBNEiwA-Kcgu9GR2UsSnkZJLAmpnX69SH0qwXGUs_Zu2NB_CivXD-0VcdvH1QeF5xoCUc4QAvD_BwE" 
               target="_blank" rel="noopener noreferrer" className="order-card uber">
              <div className="order-card-logo-wrap">
                <img src="/assets/uber_eats_logo.png" alt="Uber Eats" className="order-card-img" />
              </div>
              <span className="order-card-label">Order on Uber Eats</span>
              <ArrowRight size={20} className="order-card-arrow" />
            </a>

            <a href="https://www.doordash.com/en-CA/store/dirty-dogs-32295739/" 
               target="_blank" rel="noopener noreferrer" className="order-card doordash">
              <div className="order-card-logo-wrap">
                <img src="/assets/doordash_logo.webp" alt="DoorDash" className="order-card-img" />
              </div>
              <span className="order-card-label">Order on DoorDash</span>
              <ArrowRight size={20} className="order-card-arrow" />
            </a>
          </div>

          <button className="cta-button" style={{ marginTop: '4rem' }} onClick={() => setView('home')}>
            ← BACK TO HOME
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
        <Nav setView={setView} />

        <div className="view-header">
          <h2 style={{ fontSize: 'clamp(4rem, 10vw, 10rem)', lineHeight: '0.8', margin: '0' }}>{isFood ? 'THE CANTEEN' : 'THE BAR'}</h2>
          <p style={{ fontFamily: 'var(--font-sub)', fontSize: '1.2rem', letterSpacing: '4px', marginTop: '1rem', color: '#888', textTransform: 'uppercase' }}>
            {!isFood && 'COCKTAILS & CRAFT BEERS'}
          </p>
        </div>

        {isFood ? (
          <div className="menu-grid">
            {sections.map(section => (
              <div key={section} className="menu-section">
                <h3 className="menu-category-title">{section}</h3>
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
                <h3 className="menu-category-title" style={{ marginLeft: '4rem', marginRight: '4rem' }}>{section}</h3>
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
