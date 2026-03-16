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
          <h1 className="newsletter-title">Events</h1>
          <p className="newsletter-subtitle">What's happening at Dirty Dogs.</p>
        </header>

        <main className="newsletter-main">
          {sortedEvents.length > 0 ? (
            sortedEvents.map((event) => (
              <motion.article 
                key={event.id} 
                className={`newsletter-card ${event.isDynamicallyPast ? 'is-past' : ''}`}
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                
                <div className="newsletter-text-content">
                  <span className="newsletter-kicker">{event.date}</span>
                  <h2 className="newsletter-heading">{event.title}</h2>
                  <p className="newsletter-description">{event.description}</p>
                  <p className="newsletter-location">{event.location}</p>
                </div>

                <div className="newsletter-image-container">
                  <img src={event.image} alt={event.title} className="newsletter-image" loading="lazy" />
                  {event.isDynamicallyPast && <div className="newsletter-badge">PAST EVENT</div>}
                </div>

                <div className="newsletter-actions">
                  <a href={event.link} className="apple-pill-btn" target={event.link !== '#' ? "_blank" : "_self"} rel="noreferrer">
                    {event.isDynamicallyPast ? 'VIEW RECAP' : 'RSVP & TICKETS'}
                  </a>
                </div>

              </motion.article>
            ))
          ) : (
            <div className="newsletter-empty">
              <h2>NO EVENTS FOUND</h2>
            </div>
          )}
        </main>

        <footer className="newsletter-footer">
          <p>Stay Dirty.</p>
        </footer>

      </div>
    </div>
  );
};

export default EventFeed;
