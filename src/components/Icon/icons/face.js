// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg width="10" height="10" className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M17.5,14.4c-1.2-0.5-3-1.9-5.7-2.4c0.7-0.7,1.2-1.9,1.7-3.2c0.3-0.8,0.3-1.4,0.3-2.4c0-0.7,0.1-1.8,0-2.4 c-0.6-2.1-2.1-2.7-3.8-2.7C8.2,1.3,6.8,1.9,6.2,4c-0.2,0.6,0,1.7,0,2.4c0,0.9-0.1,1.6,0.3,2.4c0.5,1.4,1,2.5,1.7,3.2 c-2.6,0.5-4.4,1.9-5.6,2.4C0,15.4,0,16.6,0,16.6v2.1h20v-2.1C20,16.6,20,15.4,17.5,14.4z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] face';

export default Icon
