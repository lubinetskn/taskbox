// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <rect x="0" y="14" width="20" height="1.5" />
        <rect x="0" y="9" width="20" height="1.5" />
        <rect x="0" y="4" width="20" height="1.5" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] menu';

export default Icon
