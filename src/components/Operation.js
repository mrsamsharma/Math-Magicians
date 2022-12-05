import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Operation({ operation, eventHandle }) {
  return (
    <button type="button" className="orange" onClick={eventHandle}>{operation}</button>
  );
}
