import React from 'react';
import PropTypes from 'prop-types';

import { TooltipLinkList, Icons } from '@storybook/components';

console.log(TooltipLinkList); 
console.log(Icons); 

export default function Input({ type = '', ...props }) {
  return <input type={type} {...props} />;
}

Input.propTypes = {
  type: PropTypes.string,
};
