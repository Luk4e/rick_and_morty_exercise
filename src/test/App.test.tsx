import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

afterEach(cleanup);

test('renders List page', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Rick and Morty personages/i).textContent).toBe('Rick and Morty personages');
});

test('render Favourite page', () => {
  render(<App />);
  userEvent.click(screen.getByText(/Favourite/i));
  expect(screen.getByText(/Favourite Personages/i)).toBeInTheDocument();
  expect(screen.getByText(/No Personages/i)).toBeInTheDocument();
});
