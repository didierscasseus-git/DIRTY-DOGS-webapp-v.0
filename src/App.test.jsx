import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import App from './App';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  const mockMotion = (Component) => ({ children, ...props }) => <Component {...props}>{children}</Component>;
  return {
    ...actual,
    motion: {
      ...actual.motion,
      div: mockMotion('div'),
      section: mockMotion('section'),
      button: mockMotion('button'),
      h1: mockMotion('h1'),
      h2: mockMotion('h2'),
      article: mockMotion('article'),
      p: mockMotion('p'),
    },
    AnimatePresence: ({ children }) => <>{children}</>,
  };
});

describe('App Component', () => {
  it('renders home view by default', () => {
    render(<App />);
    expect(screen.getByText('THE BAR')).toBeInTheDocument();
    expect(screen.getByText('THE CANTEEN')).toBeInTheDocument();
  });

  it('switches to menu view when MENU is clicked', () => {
    render(<App />);
    const menuLink = screen.getByText('MENU');
    fireEvent.click(menuLink);
    expect(screen.getByText('THE CANTEEN')).toBeInTheDocument();
    // In menu view, "THE CANTEEN" is an h2
    const headings = screen.getAllByRole('heading', { level: 2 });
    expect(headings.some(h => h.textContent === 'THE CANTEEN')).toBe(true);
  });
});
