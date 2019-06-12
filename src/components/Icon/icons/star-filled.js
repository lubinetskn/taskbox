// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    // eslint-disable-next-line camelcase
    <svg className={cx({ svg_lightgreen: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <path d="M17.7,8.3l-5.1-1.1L10,2.6L7.4,7.1L2.3,8.3l3.5,3.9l-0.6,5.2l4.7-2.1l4.7,2.1L14,12.2L17.7,8.3z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] star_filled';

export default Icon
