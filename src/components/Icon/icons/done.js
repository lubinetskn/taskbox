// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    // eslint-disable-next-line camelcase
    <svg width="10" height="10" className={cx({ svg_lightgreen: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M17.2,6.5l-8.5,8.6l-4.6-4.6L5.5,9l3.2,3.2L16,4.8C14.6,3.1,12.4,2,10,2c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8 C18,8.7,17.7,7.6,17.2,6.5z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] done';

export default Icon
