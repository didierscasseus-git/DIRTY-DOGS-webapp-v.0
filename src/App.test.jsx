import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
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
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('CANTEEN')).toBeInTheDocument();
    expect(screen.getByText('SALCHIPAPAS')).toBeInTheDocument();
  });

  it('switches to menu view when MENU is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const menuLink = screen.getByText('CANTEEN');
    fireEvent.click(menuLink);
    expect(screen.getByText('THE CANTEEN')).toBeInTheDocument();
    // In menu view, "THE CANTEEN" is an h1
    const headings = screen.getAllByRole('heading', { level: 1 });
    expect(headings.some(h => h.textContent === 'THE CANTEEN')).toBe(true);
  });
});
