// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    // eslint-disable-next-line camelcase
    <svg className={cx({ svg_outline: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <path d="M18.3,3.3H1.7c-0.6,0-1.1,0.5-1.1,1v11.5c0,0.5,0.5,1,1.1,1h16.6c0.6,0,1.1-0.4,1.1-1V4.3C19.4,3.8,18.9,3.3,18.3,3.3z M10.6,7.7c1.5,0.2,2.7,1.1,2.7,2.3c0,1.1-1.2,2.1-2.7,2.3V7.7z M1.8,6.8h1.6v6.3H1.8V6.8z M9.5,12.3C8,12.1,6.8,11.1,6.8,9.9c0-1.1,1.2-2.1,2.7-2.3V12.3z M9.5,6.7C7.3,6.8,5.7,8.3,5.7,9.9s1.7,3.1,3.8,3.3v2.3H1.8v-1.4h2.8V5.9H1.8V4.6h7.6v2.1H9.5z M18.2,13.1h-1.6V6.8h1.6V13.1z M18.2,5.9h-2.8v8.2h2.8v1.4h-7.6v-2.3c2.1-0.2,3.8-1.6,3.8-3.3s-1.7-3.1-3.8-3.3V4.6h7.6V5.9z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] widget';

export default Icon
