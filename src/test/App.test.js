import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Calculator from '../pages/Calculator';

test('If the user click on Calculator, the DOM is updated', () => {
  render(<App />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('link', { name: /calculator/i }));
  expect(screen.getByRole('link', { name: /calculator/i })).toBeInTheDocument();
});

test('If the user click on Home, the DOM is updated', () => {
  render(<App />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('link', { name: /home/i }));
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
});

test('If the user click on Quote, the DOM is updated', () => {
  render(<App />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('link', { name: /quote/i }));
  expect(screen.getByRole('link', { name: /quote/i })).toBeInTheDocument();
});

test('If the user clicks on AC, nothing will be printed in calculator', () => {
  render(<Calculator />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('button', { name: /AC/i }));
  expect(screen.getByTestId('operand')).toBeInTheDocument();
});

test('If the user clicks on 7 and +/-, -7 will be printed in calculator', () => {
  render(<Calculator />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('button', { name: /7/i }));
  userEvent.click(screen.getByTestId('+/-'));
  expect(screen.getByText(/-7/i)).toBeInTheDocument();
});

test('If the user multiplies 7 x 3, 21 will be printed in calculator', () => {
  render(<Calculator />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('button', { name: /7/i }));
  userEvent.click(screen.getByRole('button', { name: /x/i }));
  userEvent.click(screen.getByRole('button', { name: /3/i }));
  userEvent.click(screen.getByRole('button', { name: /=/i }));
  expect(screen.getByText(/21/i)).toBeInTheDocument();
});

test('If the user 10 % 30, 10 will be printed in calculator', () => {
  render(<Calculator />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('button', { name: /1/i }));
  userEvent.click(screen.getByRole('button', { name: /0/i }));
  userEvent.click(screen.getByRole('button', { name: /%/i }));
  userEvent.click(screen.getByRole('button', { name: /3/i }));
  userEvent.click(screen.getByRole('button', { name: /0/i }));
  userEvent.click(screen.getByRole('button', { name: /=/i }));
  expect(screen.getByText(/10/i)).toBeInTheDocument();
});

test('If the user subtracts 5 from 10, 5 will be printed in calculator', () => {
  render(<Calculator />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('button', { name: /1/i }));
  userEvent.click(screen.getByRole('button', { name: /0/i }));
  userEvent.click(screen.getByRole('button', { name: /0/i }));
  userEvent.click(screen.getByTestId('-'));
  userEvent.click(screen.getByRole('button', { name: /5/i }));
  userEvent.click(screen.getByRole('button', { name: /=/i }));
  expect(screen.getByText(/95/i)).toBeInTheDocument();
});

test('If the user adds 5 to 10, 15 will be printed in calculator', () => {
  render(<Calculator />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('button', { name: /1/i }));
  userEvent.click(screen.getByRole('button', { name: /0/i }));
  userEvent.click(screen.getByTestId('+'));
  userEvent.click(screen.getByRole('button', { name: /5/i }));
  userEvent.click(screen.getByRole('button', { name: /=/i }));
  expect(screen.getByText(/15/i)).toBeInTheDocument();
});

test('If the click number 1 2, 1 will be printed in calculator', () => {
  render(<Calculator />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('button', { name: /1/i }));
  userEvent.click(screen.getByRole('button', { name: /2/i }));
  expect(screen.getByText(/12/i)).toBeInTheDocument();
});

test('If the click number 2 4, 24 will be printed in calculator', () => {
  render(<Calculator />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('button', { name: /2/i }));
  userEvent.click(screen.getByRole('button', { name: /4/i }));
  expect(screen.getByText(/24/i)).toBeInTheDocument();
});

test('If the click number 3 4, 34 will be printed in calculator', () => {
  render(<Calculator />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('button', { name: /3/i }));
  userEvent.click(screen.getByRole('button', { name: /4/i }));
  expect(screen.getByText(/34/i)).toBeInTheDocument();
});

test('If the click number 4 5, 45 will be printed in calculator', () => {
  render(<Calculator />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('button', { name: /4/i }));
  userEvent.click(screen.getByRole('button', { name: /5/i }));
  expect(screen.getByText(/45/i)).toBeInTheDocument();
});

test('If the click number 5 6, 56 will be printed in calculator', () => {
  render(<Calculator />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('button', { name: /5/i }));
  userEvent.click(screen.getByRole('button', { name: /6/i }));
  expect(screen.getByText(/56/i)).toBeInTheDocument();
});

test('If the click number 6 2, 62 will be printed in calculator', () => {
  render(<Calculator />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('button', { name: /6/i }));
  userEvent.click(screen.getByRole('button', { name: /2/i }));
  expect(screen.getByText(/62/i)).toBeInTheDocument();
});

test('If the click number 7 2, 72 will be printed in calculator', () => {
  render(<Calculator />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('button', { name: /7/i }));
  userEvent.click(screen.getByRole('button', { name: /2/i }));
  expect(screen.getByText(/72/i)).toBeInTheDocument();
});

test('If the click number 8 1, 81 will be printed in calculator', () => {
  render(<Calculator />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('button', { name: /8/i }));
  userEvent.click(screen.getByRole('button', { name: /1/i }));
  expect(screen.getByText(/81/i)).toBeInTheDocument();
});

test('If the click number 9 8, 98 will be printed in calculator', () => {
  render(<Calculator />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('button', { name: /9/i }));
  userEvent.click(screen.getByRole('button', { name: /8/i }));
  expect(screen.getByText(/98/i)).toBeInTheDocument();
});

test('If the click number 0 1 0, 10 will be printed in calculator', () => {
  render(<Calculator />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('button', { name: /0/i }));
  userEvent.click(screen.getByRole('button', { name: /1/i }));
  userEvent.click(screen.getByRole('button', { name: /0/i }));
  expect(screen.getByText(/10/i)).toBeInTheDocument();
});

test('If the click on 1 . 5, 1.5 will be printed in calculator', () => {
  render(<Calculator />, { wrapper: MemoryRouter });
  userEvent.click(screen.getByRole('button', { name: /1/i }));
  userEvent.click(screen.getByRole('button', { name: /\./i }));
  userEvent.click(screen.getByRole('button', { name: /5/i }));
  expect(screen.getByText(/1.5/i)).toBeInTheDocument();
});
