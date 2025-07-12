import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Front-End heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Front-End/i);
  expect(headingElement).toBeInTheDocument();
});
