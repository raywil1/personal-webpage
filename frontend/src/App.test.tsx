import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Rayhan Wilangkara/i);
  expect(headingElement).toBeInTheDocument();
});
