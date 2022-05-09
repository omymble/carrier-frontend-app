import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App
      // state={{...store_my.getState()} } store_my={store_my}
      // dispatch={store_my.dispatch.bind(store_my)}
  />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
