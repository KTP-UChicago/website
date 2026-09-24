import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import HomePage from './components/pages/homePage/HomePage';

jest.mock('./contexts/FirebaseContext', () => ({
  FirebaseProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useFirebase: () => ({ firestore: {}, auth: {} }),
}));

jest.mock('./contexts/AuthenticationContext', () => ({
  AuthenticationContextProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useAuthentication: () => ({ user: null, handleLogin: jest.fn(), handleLogout: jest.fn() }),
}));

const renderHome = () =>
  render(
    <HashRouter>
      <HomePage />
    </HashRouter>
  );

test('renders homepage hero headline', () => {
  renderHome();
  expect(
    screen.getByText(/Technology brings us together/i)
  ).toBeInTheDocument();
});

test('does not render removed meet the people section', () => {
  renderHome();
  expect(screen.queryByText(/Meet the people behind KTP/i)).not.toBeInTheDocument();
  expect(screen.queryByRole('link', { name: /^Meet the chapter$/i })).not.toBeInTheDocument();
});

test('renders renumbered section headers', () => {
  renderHome();
  expect(screen.getByText(/03/i)).toBeInTheDocument();
  expect(screen.getByText(/Where members go/i)).toBeInTheDocument();
  expect(screen.getByText(/04/i)).toBeInTheDocument();
  expect(screen.getByText(/Life in KTP/i)).toBeInTheDocument();
});

test('renders contact us and sign in in navigation', () => {
  renderHome();
  expect(screen.getByRole('navigation', { name: /main navigation/i })).toHaveTextContent('Contact Us');
  expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
});

test('renders full navigation trigger and Why KTP carousel controls', () => {
  renderHome();
  expect(screen.getByRole('button', { name: /open navigation/i })).toBeInTheDocument();
  expect(screen.getByRole('region', { name: /why ktp pillars/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /previous why ktp pillars/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /next why ktp pillars/i })).toBeInTheDocument();
  expect(screen.queryByRole('region', { name: /recent events/i })).not.toBeInTheDocument();
  expect(screen.queryByRole('region', { name: /life at ktp photos/i })).not.toBeInTheDocument();
  expect(screen.getByLabelText(/companies where ktp members work/i)).toBeInTheDocument();
});

test('renders rush cta with readable actions', () => {
  renderHome();
  expect(screen.getByText(/Find your place in KTP/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Learn About Rush/i })).toBeInTheDocument();
});
