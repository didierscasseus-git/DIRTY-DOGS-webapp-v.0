import React from 'react';

const PartyMode = () => {
    const events = [
        { id: 1, title: 'DJ NIGHT: NEON DRIFT', time: 'TONIGHT 10PM', desc: 'Electronic beats and $5 shots.' },
        { id: 2, title: 'TAP TAKEOVER: BREW MONTRÉAL', time: 'FRIDAY 8PM', desc: 'Local craft beers on all taps.' }
    ];

    const highScores = [
        { name: 'HOTDOG_KING', score: '999,999' },
        { name: 'POUTINE_QUEEN', score: '850,200' },
        { name: 'DIRTY_DEE', score: '720,000' }
    ];

    return (
        <div className="party-container">
            <section className="events-feed">
                <h2 className="massive-header">UPCOMING</h2>
                {events.map(event => (
                    <div key={event.id} className="event-card">
                        <div className="event-time flat-tag">{event.time}</div>
                        <h3 className="event-title">{event.title}</h3>
                        <p className="event-desc">{event.desc}</p>
                    </div>
                ))}
            </section>

            <section className="arcade-scores">
                <h2 className="massive-header">TOP SCORES</h2>
                <div className="score-board">
                    {highScores.map((s, i) => (
                        <div key={i} className="score-row">
                            <span className="rank-badge">{i + 1}</span>
                            <span className="player-name">{s.name}</span>
                            <span className="player-score">{s.score}</span>
                        </div>
                    ))}
                </div>
            </section>

            <style>{`
        .party-container {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 4rem;
          background: #000;
          color: #fff;
          min-height: 100vh;
        }

        .event-card {
          background: var(--color-shelf-orange);
          color: var(--color-text-dark);
          padding: 2rem;
          margin-top: 1rem;
          border: var(--border-thick);
          box-shadow: 10px 10px 0px #FF2400;
        }

        .event-title {
          font-family: var(--font-header);
          font-size: 2.5rem;
          margin-top: 1rem;
        }

        .arcade-scores {
          border: 5px solid #00FFCC;
          padding: 2rem;
          background: #111;
        }

        .score-board {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .score-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-bottom: 2px dashed #00FFCC;
          font-family: var(--font-header);
          font-size: 1.8rem;
        }

        .rank-badge {
          background: #00FFCC;
          color: #000;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .player-score {
          color: #FF2400;
        }
      `}</style>
        </div>
    );
};

export default PartyMode;
