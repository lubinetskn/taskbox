// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg width="10" height="10" className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <polygon points="3.5,3 2.7,3.7 5.1,6.1 0,6.1 0,7.2 5.1,7.2 2.7,9.6 3.5,10.4 7.2,6.7 " />
        <path d="M15.7,3.7L15.1,3c-0.4-0.5-1.2-0.5-1.6,0l-8.1,7.7c-0.4,0.5-0.4,1.2,0,1.6L6,13L15.7,3.7z" />
        <path d="M7.7,14.7L10,17c0.4,0.5,1.2,0.5,1.6,0l8-7.7c0.5-0.4,0.5-1.2,0-1.6l-2.3-2.4L7.7,14.7z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] deposit';

export default Icon
