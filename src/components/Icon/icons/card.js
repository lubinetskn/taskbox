// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg width="10" height="10" className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M15.6,2.5l-0.7-1c-0.5-0.7-1.4-0.9-2.1-0.4l-12.2,8c-0.6,0.4-0.8,1.3-0.4,2l0.7,1L15.6,2.5z" />
        <path d="M2.6,14.8L5,18.5c0.5,0.7,1.4,0.9,2.1,0.4l12.2-8c0.7-0.5,0.9-1.4,0.5-2.1l-2.4-3.7L2.6,14.8z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] card';

export default Icon
