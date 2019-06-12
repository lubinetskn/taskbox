// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <rect height="2" width="11" y="1.5" x="2" />
        <rect height="2" width="16" y="6.5" x="2" />
        <rect height="2" width="11" y="11.5" x="2" />
        <rect height="2" width="16" y="16.5" x="2" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] text';

export default Icon
