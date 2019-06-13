// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    // eslint-disable-next-line camelcase
    <svg width="10" height="10" className={cx({ svg_grey: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M10,1.4c-4.7,0-8.6,3.8-8.6,8.6c0,4.7,3.8,8.6,8.6,8.6c4.7,0,8.6-3.8,8.6-8.6C18.6,5.3,14.7,1.4,10,1.4z M10,17.6c-4.2,0-7.6-3.4-7.6-7.6c0-4.2,3.4-7.6,7.6-7.6c4.2,0,7.6,3.4,7.6,7.6C17.6,14.2,14.2,17.6,10,17.6z" />
        <path d="M10,3.4c-0.4,0-0.7,0.3-0.7,0.7v4.3l-3-2.5C5.8,5.6,5.5,5.7,5.2,6C4.8,6.3,5,6.8,5.3,7.1l4.2,3.5 c0.2,0.1,0.3,0.2,0.5,0.2c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0.4,0,0.7-0.3,0.7-0.7v-6C10.7,3.7,10.4,3.4,10,3.4z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] delay';

export default Icon