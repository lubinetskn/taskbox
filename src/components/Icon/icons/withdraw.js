// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <polygon points="16.4,9.8 15.6,10.6 17.9,12.9 12.9,12.9 12.9,14 17.9,14 15.6,16.4 16.4,17.1 20,13.5 " />
        <path d="M10.5,3.7L9.9,3C9.5,2.6,8.8,2.5,8.3,3l-8,7.6c-0.4,0.4-0.5,1.1,0,1.6l0.6,0.7L10.5,3.7z" />
        <path d="M2.6,14.6L4.9,17c0.4,0.4,1.1,0.5,1.6,0l7.9-7.6c0.4-0.4,0.5-1.1,0-1.6l-2.3-2.4L2.6,14.6z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] withdraw';

export default Icon