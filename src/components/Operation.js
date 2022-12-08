import React from 'react';
import PropTypes from 'prop-types';

export default function Operation({ operation, eventHandle }) {
  return (
    <button type="button" data-testid={operation} className="orange" onClick={eventHandle}>{operation}</button>
  );
}

Operation.propTypes = {
  operation: PropTypes.string,
  eventHandle: PropTypes.func,
};

Operation.defaultProps = {
  operation: '+',
  eventHandle: { },
};
