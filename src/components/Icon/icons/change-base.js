// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg width="10" height="10" className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="10" />
        <g>
            <polygon points="3,10 8,7 8,13" />
            <polygon points="17,10 12,13 12,7" />
        </g>
    </svg>
);

Icon.displayName = '[lib-ui__icons] change_base';

export default Icon
