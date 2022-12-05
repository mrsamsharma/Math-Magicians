import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Digit({ digit, eventHandle }) {
  return (
    <button type="button" onClick={eventHandle}>{digit}</button>
  );
}
