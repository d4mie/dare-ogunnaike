import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the AboutMe component
jest.mock('./components/AboutMe/AboutMe', () => {
  // eslint-disable-next-line react/display-name
  return () => <div>Mock AboutMe</div>;
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
