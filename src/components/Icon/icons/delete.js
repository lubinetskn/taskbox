// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg width="10" height="10" className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M5.4,15.4C5.4,16.3,6.1,17,7,17h6.2c0.9,0,1.6-0.7,1.6-1.6V6H5.4V15.4z M15.4,3.7h-2.7L12,2.9H8.1L7.3,3.7H4.6 v1.6h10.9V3.7z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] delete';

export default Icon
