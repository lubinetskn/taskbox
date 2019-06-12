// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): React$Element<*> => (
    // eslint-disable-next-line camelcase
    <svg width="10" height="10" className={cx({ svg_return: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M1.5,7v9h9l-3.6-3.6c1.4-1.2,3.2-1.9,5.1-1.9c3.6,0,6.6,2.3,7.6,5.5l2.4-0.8C20.6,11,16.7,8,12,8c-2.6,0-5,1-6.9,2.6L1.5,7z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] return';

export default Icon

