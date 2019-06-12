// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg width="10" height="10" className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <polygon points="10.5,5.2 9.5,6.2 12.5,9.3 4.7,9.3 4.7,10.8 12.5,10.8 9.5,13.9 10.5,14.9 15.3,10" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] arrow_full';

export default Icon
