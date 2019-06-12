// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg width="10" height="10" className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M19.5,6.9c0-2.8-2.3-5.1-5.1-5.1c-1.8,0-3.5,1-4.4,2.4C9.1,2.8,7.5,1.8,5.6,1.8c-2.8,0-5.1,2.3-5.1,5.1c0,1.5,0.7,2.9,1.8,3.8L9.5,18c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.5-0.2l7.2-7.2C18.8,9.8,19.5,8.5,19.5,6.9z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] heart';

export default Icon
