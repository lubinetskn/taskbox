// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg width="10" height="10" className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <rect x="10.6" y="10.8" width="6.2" height="7.8" />
        <rect x="3.3" y="10.8" width="6.2" height="7.8" />
        <path d="M14.8,4.5c0.2-0.3,0.3-0.7,0.3-1c0-1.2-1-2.2-2.2-2.2c-0.9,0-1.8,0.5-2.5,1.2C10.3,2.8,10.1,3,10,3.2C9.9,3,9.7,2.8,9.5,2.6C8.9,1.8,8,1.4,7.1,1.4c-1.2,0-2.2,1-2.2,2.2c0,0.4,0.1,0.7,0.3,1H2.2v5.2h7.2V4.5h1.1v5.2h7.2V4.5H14.8z M7.1,4.5c-0.6,0-1-0.5-1-1s0.5-1,1-1c1,0,2,1,2.3,2.1L7.1,4.5L7.1,4.5z M12.9,4.5h-2.3c0.3-1,1.3-2.1,2.3-2.1c0.6,0,1,0.5,1,1C14,4.1,13.5,4.5,12.9,4.5z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] full-screen';

export default Icon
