import React from 'react';
import renderer from 'react-test-renderer';
import Operation from '../components/Operation';

it('Operation Component renders correctly', () => {
  const tree = renderer
    .create(<Operation />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
