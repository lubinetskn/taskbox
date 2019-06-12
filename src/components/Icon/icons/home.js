// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg width="10" height="10" className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M18.8,9.8c0.3-0.4,0.3-0.9-0.1-1.3l-8-7.3c-0.4-0.3-1-0.3-1.3,0L1.3,8.9c-0.4,0.3-0.4,0.9,0,1.3l0.2,0.2c0.3,0.4,0.9,0.4,1.2,0.1l0.6-0.6v8.2c0,0.5,0.4,0.9,0.9,0.9h3.1c0.5,0,0.9-0.4,0.9-0.9v-5.7h4v5.7c0,0.5,0.3,0.9,0.8,0.9h3.3c0.5,0,0.9-0.4,0.9-0.9V10c0,0,0.2,0.2,0.4,0.3c0.2,0.2,0.6,0,1-0.3L18.8,9.8z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] home';

export default Icon
