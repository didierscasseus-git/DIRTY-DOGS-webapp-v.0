import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../data/eventData';
import '../index.css';

const EventFeed = () => {
  // Combine and sort all events chronologically
  // For a newsletter, we usually want chronological (upcoming earliest to latest, then past latest to earliest)
  // Let's sort so the closest upcoming event is first, followed by further upcoming, then recent past.
  const now = new Date();
  
  const sortedEvents = [...eventData].map(event => {
    // Dynamically calculate if the event is past based on current viewing time
    const eventDate = new Date(event.dateIso);
    return {
      ...event,
      isDynamicallyPast: eventDate < now,
      timeDiff: Math.abs(eventDate - now)
    };
  }).sort((a, b) => {
    // If one is upcoming and one is past, upcoming ALWAYS goes first
    if (!a.isDynamicallyPast && b.isDynamicallyPast) return -1;
    if (a.isDynamicallyPast && !b.isDynamicallyPast) return 1;
    
    // If both are upcoming, sort soonest first (ascending dates)
    if (!a.isDynamicallyPast && !b.isDynamicallyPast) {
      return new Date(a.dateIso) - new Date(b.dateIso);
    }
    
    // If both are past, sort most recent past first (descending dates)
    if (a.isDynamicallyPast && b.isDynamicallyPast) {
      return new Date(b.dateIso) - new Date(a.dateIso);
    }
    
    return 0;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="newsletter-wrapper">
      <div className="newsletter-container">
        <header className="newsletter-header">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="newsletter-title"
          >
            Events
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="newsletter-subtitle"
          >
            What's happening at Dirty Dogs.
          </motion.p>
        </header>

        <main className="newsletter-main">
          {sortedEvents.length > 0 ? (
            sortedEvents.map((event, index) => (
              <motion.article 
                key={event.id} 
                className={`newsletter-card ${event.isDynamicallyPast ? 'is-past' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
              >
                <div className="newsletter-text-content">
                  <span className="newsletter-kicker">{event.date}</span>
                  <h2 className="newsletter-heading">{event.title}</h2>
                  <p className="newsletter-description">{event.description}</p>
                  <p className="newsletter-location">{event.location}</p>
                  
                  <div className="newsletter-actions" style={{ marginTop: '2rem' }}>
                    <a href={event.link} className="hero-cta-btn" style={{ padding: '0.8rem 1.5rem', fontSize: '1rem', background: '#fff', color: '#000', textDecoration: 'none', display: 'inline-block' }} target={event.link !== '#' ? "_blank" : "_self"} rel="noreferrer">
                      {event.isDynamicallyPast ? 'VIEW RECAP' : 'RSVP & TICKETS'}
                    </a>
                  </div>
                </div>

                <div className="newsletter-image-container">
                  <img src={event.image} alt={event.title} className="newsletter-image" loading="lazy" />
                  {event.isDynamicallyPast && <div className="newsletter-badge" style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(0,0,0,0.8)', padding: '0.5rem 1rem', borderRadius: '40px', fontSize: '0.8rem' }}>PAST EVENT</div>}
                </div>
              </motion.article>
            ))
          ) : (
            <div className="newsletter-empty">
              <h2>NO EVENTS FOUND</h2>
            </div>
          )}
        </main>
      </div>

      <style>{`
        .newsletter-wrapper {
          padding-top: 100px;
          background: var(--color-canvas);
          min-height: 100vh;
        }

        .newsletter-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem calc(2rem + env(safe-area-inset-right)) 4rem calc(2rem + env(safe-area-inset-left));
        }

        .newsletter-header {
          margin-bottom: 4rem;
          text-align: left;
        }

        .newsletter-title {
          font-family: var(--font-header);
          font-size: clamp(3rem, 15vw, 6rem);
          line-height: 1;
          margin-bottom: 1rem;
        }

        .newsletter-subtitle {
          font-family: var(--font-sub);
          font-size: 1.5rem;
          color: var(--color-text-dim);
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .newsletter-main {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .newsletter-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border-radius: var(--radius-card);
          overflow: hidden;
          border: 1px solid var(--glass-border);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          min-height: 400px;
          box-shadow: var(--glass-shadow);
        }

        .newsletter-card:hover {
          transform: translateY(-8px);
        }

        .newsletter-text-content {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.5rem;
        }

        .newsletter-kicker {
          font-family: var(--font-sub);
          color: var(--color-action);
          font-weight: bold;
          font-size: 1rem;
          letter-spacing: 2px;
        }

        .newsletter-heading {
          font-family: var(--font-header);
          font-size: 3rem;
          line-height: 1.1;
        }

        .newsletter-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
        }

        .newsletter-location {
          font-size: 0.9rem;
          color: var(--color-text-dim);
          text-transform: uppercase;
        }

        .newsletter-image-container {
          position: relative;
          overflow: hidden;
        }

        .newsletter-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .newsletter-card:hover .newsletter-image {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .newsletter-card {
            grid-template-columns: 1fr;
          }
          .newsletter-text-content {
            padding: 2rem;
            order: 2;
          }
          .newsletter-image-container {
            height: 300px;
            order: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default EventFeed;
