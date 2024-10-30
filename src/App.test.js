import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the professor\'s name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Dr\. S\. Sangeetha/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders contact information', () => {
  render(<App />);
  const emailElement = screen.getByText(/vns\.sangeetha@gmail\.com/i);
  expect(emailElement).toBeInTheDocument();
});
