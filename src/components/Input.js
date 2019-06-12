import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ type = '', ...props }) {
  return <input type={type} {...props} />;
}

Input.propTypes = {
  type: PropTypes.string,
};
