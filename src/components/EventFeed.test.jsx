import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import EventFeed from './EventFeed';

// Mock framer-motion
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  const mockMotion = (Component) => ({ children, ...props }) => <Component {...props}>{children}</Component>;
  return {
    ...actual,
    motion: {
      ...actual.motion,
      div: mockMotion('div'),
      article: mockMotion('article'),
      h1: mockMotion('h1'),
      p: mockMotion('p'),
    },
  };
});

// Mock eventData
vi.mock('../data/eventData', () => ({
  eventData: [
    {
      id: 1,
      title: 'Upcoming Event',
      date: 'Dec 25, 2026',
      dateIso: '2026-12-25',
      description: 'An upcoming event',
      location: 'Dirty Dogs',
      image: '/test.png',
      link: '#'
    }
  ]
}));

describe('EventFeed Component', () => {
  it('renders events correctly', () => {
    render(<EventFeed />);
    expect(screen.getByText('Upcoming Event')).toBeInTheDocument();
    expect(screen.getByText('RSVP & TICKETS')).toBeInTheDocument();
  });
});
