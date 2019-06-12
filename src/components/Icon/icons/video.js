// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <circle cx="10" cy="10" r="8" />
        <g>
            <polygon points="14.6,10 7.3,14.2 7.3,5.8" />
        </g>
    </svg>
);

Icon.displayName = '[lib-ui__icons] video';

export default Icon
