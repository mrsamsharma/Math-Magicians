import React from 'react';
import Navbar from '../components/Navbar';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

it('Digit Component renders correctly', () => {
    const tree = renderer
      .create(<Router>
        <Navbar />
      </Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });