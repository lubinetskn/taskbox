// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <polygon points="12.3,1 11.3,2.1 14.4,5.3 7.6,5.3 7.6,6.8 14.4,6.8 11.3,10 12.3,11 17.3,6" />
        <polygon points="7.6,19 8.6,18 5.5,14.8 12.3,14.8 12.3,13.3 5.5,13.3 8.6,10.1 7.6,9.1 2.7,14" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] statement';

export default Icon