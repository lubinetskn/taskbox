// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <path d="M10,0C4.5,0,0,4.5,0,10c0,3.5,1.8,6.5,4.4,8.3l4.8-7.8H5.7l9.6-8.9C13.8,0.6,12,0,10,0z M4.6,18.4C6.2,19.4,8,20,10,20c5.5,0,10-4.5,10-10c0-3.4-1.8-6.5-4.4-8.3l-3.8,6.8h3.5L4.6,18.4z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] quick';

export default Icon
