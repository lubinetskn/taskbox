// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <path d="M15.4,10.4c-0.6-0.7-1.2-1.1-1.9-1.1V3.8c0.4,0,0.7-0.1,1-0.4c0.3-0.3,0.4-0.6,0.4-1c0-0.4-0.1-0.7-0.4-1 c-0.3-0.3-0.6-0.4-1-0.4H6.5c-0.4,0-0.7,0.1-1,0.4C5.3,1.7,5.2,2,5.2,2.4c0,0.4,0.1,0.7,0.4,1c0.3,0.3,0.6,0.4,1,0.4v5.5 c-0.7,0-1.4,0.4-1.9,1.1c-0.6,0.7-0.8,1.5-0.8,2.4c0,0.2,0.1,0.3,0.2,0.5c0.1,0.1,0.3,0.2,0.5,0.2h4.4l0.8,5.2 c0,0.2,0.2,0.3,0.3,0.3h0c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2l0.6-5.2h4.6c0.2,0,0.3-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5 C16.2,11.9,15.9,11.1,15.4,10.4z M9,9c0,0.1,0,0.2-0.1,0.2C8.8,9.3,8.7,9.3,8.6,9.3c-0.1,0-0.2,0-0.2-0.1C8.3,9.1,8.3,9.1,8.3,9 V4.1c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.2,0.1C8.9,3.9,9,4,9,4.1V9z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] pin';

export default Icon
