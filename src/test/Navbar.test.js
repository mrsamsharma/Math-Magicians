import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

it('Digit Component renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Navbar />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
