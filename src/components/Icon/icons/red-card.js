// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className, num }: { className: string, num: string }): React$Element<*> => (
    <svg width="12" height="14" className={cx('svg_red-card', className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 24">
        <path d="M5.000,-0.000 L13.000,-0.000 C15.761,-0.000 18.000,2.239 18.000,5.000 L18.000,18.000 C18.000,20.761 15.761,23.000 13.000,23.000 L5.000,23.000 C2.239,23.000 -0.000,20.761 -0.000,18.000 L-0.000,5.000 C-0.000,2.239 2.239,-0.000 5.000,-0.000 Z" />
        <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle">{num}</text>
    </svg>
);

Icon.displayName = '[lib-ui__icons] red-card';

export default Icon
