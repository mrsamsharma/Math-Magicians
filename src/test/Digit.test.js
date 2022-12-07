import React from 'react';
import Digit from '../components/Digit';
import renderer from 'react-test-renderer';

it('Digit Component renders correctly', () => {
    const tree = renderer
      .create(<Digit />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });