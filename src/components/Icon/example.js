// For use in tandem with TooltipLinkList
// Refer to container/nav.js for usage

import React from 'react';
import PropTypes from 'prop-types';
import { styled, css } from '@storybook/theming';

import { Icons } from '@storybook/components';


export default function ListItemIcon(image) {
  console.log(image)
  return <img src={image} alt="image" />;
}

ListItemIcon.propTypes = {
  icon: PropTypes.string,
  imgSrc: PropTypes.string,
};

ListItemIcon.defaultProps = {
  icon: null,
  imgSrc: null,
};
