// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    // eslint-disable-next-line camelcase
    <svg className={cx({ svg_warning: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <path d="M18.8,16.2L10.8,3c-0.4-0.7-1.1-0.7-1.6,0l-8,13.2c-0.5,0.7-0.1,1.3,0.8,1.3h16C18.9,17.5,19.2,16.9,18.8,16.2z" />
        <g>
            <rect x="8.9" y="7.3" width="2.2" height="4.8" />
            <rect x="8.9" y="13.4" width="2.2" height="2" />
        </g>
    </svg>
);

Icon.displayName = '[lib-ui__icons] warning';

export default Icon
