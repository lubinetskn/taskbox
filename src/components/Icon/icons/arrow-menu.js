// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg width="10" height="10" className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <polygon points="8.5,1.7 15.9,10 8.5,18.3 10.6,20 19.5,10 10.6,0" />
        <polygon points="0.5,1.7 7.9,10 0.5,18.3 2.6,20 11.5,10 2.6,0" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] arrow_menu';

export default Icon
