import React, { useState } from 'react';
import './index.css';
import { menuData } from './data/menuData';
import ShelfView from './components/ShelfView';
import ComboCard from './components/ComboCard';
import DeliverySection from './components/DeliverySection';
import DrinkCard from './components/DrinkCard';
import FoodItem from './components/FoodItem';

function App() {
  const [view, setView] = useState('home'); // 'home', 'food', 'drink', 'order'

  const Nav = ({ transparent = false }) => (
    <nav className={`header-nav ${transparent ? 'nav-transparent' : 'nav-dark'}`} style={{
      position: transparent ? 'absolute' : 'fixed',
      background: transparent ? 'transparent' : '#000',
      padding: '1rem 2rem',
      justifyContent: transparent ? 'flex-end' : 'flex-end',
      top: 0,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      zIndex: 1000
    }}>
      <a href="#" className="nav-logo-small" onClick={(e) => { e.preventDefault(); setView('home'); }}>
        <img src="/logo_zoomed.png" alt="Dirty Dogs Logo" style={{ filter: transparent ? 'invert(1)' : 'none' }} />
      </a>
      <a href="#" onClick={(e) => { e.preventDefault(); setView('home'); }} style={{ color: transparent ? '#000' : '#fff' }}>HOME</a>
      <a href="#" onClick={(e) => { e.preventDefault(); setView('food'); }} style={{ color: transparent ? '#000' : '#fff' }}>MENU</a>
      <a href="#" onClick={(e) => { e.preventDefault(); setView('drink'); }} style={{ color: transparent ? '#000' : '#fff' }}>DRINKS</a>
      <a href="#" onClick={(e) => { e.preventDefault(); setView('order'); }} className="order-online-btn" style={{ borderColor: transparent ? '#000' : '#fff', color: transparent ? '#000' : '#fff' }}>ORDER ONLINE</a>
    </nav>
  );

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
      <div className="home-container">
        <Nav transparent={true} />

        {/* Hero Section */}
        <section className="nostalgic-hero">
          <div className="hero-content fade-in">
            <div className="hero-cta-group">
              <button className="hero-cta-btn" onClick={() => setView('drink')}>
                THE BAR
              </button>
              <button className="hero-cta-btn" onClick={() => setView('food')}>
                THE CANTEEN
              </button>
            </div>
          </div>
        </section>

        {/* Iconic Plates Section */}
        <section className="plates-section">
          <div className="plates-grid">
            {iconicPlates.map((plate, index) => (
              <div key={plate.id} className="plate-card">
                <div className="plate-image-container">
                  <img src={plate.image || '/ASSETS/tacos plate.png'} alt={plate.name} />
                </div>
                <div className="plate-info">
                  <p className="plate-description">{plate.name} - {plate.description}</p>
                </div>
              </div>
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
      </div>
    );
  };

  const renderOrder = () => {
    return (
      <div className="order-view">
        <Nav transparent={false} />
        <div className="order-container fade-in">
          <h2 className="order-title">SECURE THE BAG</h2>
          <p className="order-subtitle">CHOOSE YOUR DELIVERY PLATFORM</p>
          
          <div className="order-grid">
            <a href="https://www.ubereats.com/ca-fr/store/dirty-dogs-st-laurent/F2U9RYCPUUKp6rfh7nt8ZQ?gad_source=1&gad_campaignid=22675284634&gbraid=0AAAAA_oynLRrnzMKa0gaXyU4fjXDPKxXi&gclid=CjwKCAjwyMnNBhBNEiwA-Kcgu9GR2UsSnkZJLAmpnX69SH0qwXGUs_Zu2NB_CivXD-0VcdvH1QeF5xoCUc4QAvD_BwE" 
               target="_blank" rel="noopener noreferrer" className="order-card uber">
              <div className="order-card-icon">
                <svg viewBox="0 0 24 24" fill="#06C167">
                  <path d="M12.44 2.11L10.05 4h8.39c.66 0 1.2.51 1.25 1.15l.01.1V18c0 .66-.54 1.2-1.2 1.2H7.2c-.66 0-1.2-.54-1.2-1.2V6.15L3.39 8.24c-.45.33-.6.94-.35 1.43l.07.12L6 14.24V18c0 1.99 1.61 3.6 3.6 3.6h9.6c1.99 0 3.6-1.61 3.6-3.6V5.25c0-1.77-1.28-3.23-2.96-3.51l-.2-.03h-7.2zM8.4 2.4c-.4 0-.78.16-1.06.44L2.57 7.61c-.47.47-.47 1.23 0 1.7s1.23.47 1.7 0l2.93-2.93v7.02c0 .66.54 1.2 1.2 1.2s1.2-.54 1.2-1.2V5.2c0-.66-.54-1.2-1.2-1.2h0c-.26 0-.52.08-.73.23l-.07.05v-1.88h1z"/>
                </svg>
              </div>
              <h3>UBER EATS</h3>
              <span className="order-btn-label">ORDER NOW</span>
            </a>

            <a href="https://www.doordash.com/en-CA/store/dirty-dogs-32295739/" 
               target="_blank" rel="noopener noreferrer" className="order-card doordash">
              <div className="order-card-icon">
                <svg viewBox="0 0 24 24" fill="#FF3008">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.733 13.98l-4.704 2.22c-.22.103-.466.155-.713.155-.246 0-.493-.052-.713-.155l-4.704-2.22c-.524-.247-.85- .773-.85-1.353V8.89c0-.58.326-1.106.85-1.353l4.704-2.22c.439-.208.97-.208 1.409 0l4.704 2.22c.524.247.85.773.85 1.353v3.738c0 .58-.326 1.106-.85 1.353zM12 9.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/>
                </svg>
              </div>
              <h3>DOORDASH</h3>
              <span className="order-btn-label">ORDER NOW</span>
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
      </div>
    );
  };

  const renderContent = () => {
    const isFood = view === 'food';
    const items = isFood ? menuData.food : menuData.drinks;

    const sections = isFood
      ? Array.from(new Set(items.map(i => i.category)))
      : Array.from(new Set(items.map(i => i.type)));

    return (
      <div className="menu-view" style={{ paddingTop: '8rem', background: '#000', color: '#fff', minHeight: '100vh' }}>
        <Nav transparent={false} />

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
      </div>
    );
  };

  return (
    <div className="app-root">
      {view === 'home' && renderHome()}
      {(view === 'food' || view === 'drink') && renderContent()}
      {view === 'order' && renderOrder()}

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
