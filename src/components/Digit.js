import React from 'react';
import PropTypes from 'prop-types';

export default function Digit({ digit, eventHandle }) {
  return (
    <button type="button" onClick={eventHandle}>{digit}</button>
  );
}

Digit.propTypes = {
  digit: PropTypes.string,
  eventHandle: PropTypes.func,
};

Digit.defaultProps = {
  digit: '1',
  eventHandle: { },
};
