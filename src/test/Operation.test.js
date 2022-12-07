import React from 'react';
import Operation from '../components/Operation';
import renderer from 'react-test-renderer';

it('Operation Component renders correctly', () => {
    const tree = renderer
      .create(<Operation />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });