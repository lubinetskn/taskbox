// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg width="10" height="10" className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M2.857 12.857H0V20h7.143v-2.857H2.857v-4.286zM0 7.143h2.857V2.857h4.286V0H0v7.143zm17.143 10h-4.286V20H20v-7.143h-2.857v4.286zM12.857 0v2.857h4.286v4.286H20V0h-7.143z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] full-screen';

export default Icon
