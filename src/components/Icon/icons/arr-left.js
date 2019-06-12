// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg width="10" height="10" className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <polygon points="15.5,18.3 8.1,10 15.5,1.7 13.4,0 4.5,10 13.4,20" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] arr_left';

export default Icon
