import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { CSSTransition } from 'react-transition-group';

import I18n, { isConstant } from 'core-ui__i18n';

import Warning from 'component/warning';

import style from './style';

const cx = classNames.bind(style);

const Notification = props => {
  const { show, iconType, children, ...args } = props;
  const transitionProps = {
    in: show,
    className: cx('notification', props.className),
    classNames: {
      enter: cx('notification_entering'),
      exit: cx('notification_exiting'),
    },
    timeout: {
      enter: 500,
      exit: 100,
    },
    mountOnEnter: true,
    unmountOnExit: true,
  };
  const contentProps = {
    iconType: iconType || 'error',
    classNameTextWrapper: cx('notification__text-wrapper'),
    children,
    ...args,
  };
  let content = <Warning {...contentProps} />;

  if (isConstant(children)) {
    content = <I18n tagName={Warning} {...contentProps} />;
  }

  return <CSSTransition {...transitionProps}>{content}</CSSTransition>;
};

Notification.displayName = '[component] notification';

Notification.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  iconType: PropTypes.string,
  animationProps: PropTypes.object,
  className: PropTypes.string,
};

export { Notification as default };
