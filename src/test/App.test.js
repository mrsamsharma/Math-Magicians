import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from 'react-router-dom';
import App from "../App"
import Calculator from '../pages/Calculator';

test('If the user click on Calculator, the DOM is updated', () => {
    render (<App />, {wrapper: MemoryRouter});
    userEvent.click(screen.getByRole('link', {  name: /calculator/i}));
    expect(screen.getByRole('link', {  name: /calculator/i})).toBeInTheDocument();
});

test('If the user click on button 7, 7 will be printed in calculator', () => {
    render (<Calculator />, {wrapper: MemoryRouter});
    userEvent.click(screen.getByRole('button', {name: /7/i}))
    userEvent.click(screen.getByRole('button', {name: /x/i}))
    userEvent.click(screen.getByRole('button', {name: /3/i}))
    userEvent.click(screen.getByRole('button', {name: /=/i}))
    expect(screen.getByText(/21/i)).toBeInTheDocument()
})