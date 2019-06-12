// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg width="10" height="10" className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="10" />
        <g>
            <rect x="6.3" y="9.3" width="7.4" height="1.5" />
            <rect x="7.8" y="6.3" width="4.4" height="1.5" />
            <rect x="4.5" y="12.3" width="11" height="1.5" />
        </g>
    </svg>
);

Icon.displayName = '[lib-ui__icons] def_summ';

export default Icon
