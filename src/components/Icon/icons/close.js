// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg width="10" height="10" className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <polygon points="20,2 18,0 10,8 2,0 0,2 8,10 0,18 2,20 10,12 18,20 20,18 12,10" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] close';

export default Icon
