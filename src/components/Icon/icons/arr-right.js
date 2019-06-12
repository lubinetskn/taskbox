// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg width="10" height="10" className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <polygon points="4.5,1.7 11.9,10 4.5,18.3 6.6,20 15.5,10 6.6,0" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] arr_right';

export default Icon
