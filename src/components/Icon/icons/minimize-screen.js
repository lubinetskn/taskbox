// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <path d="M0 15.714h4.286V20h2.857v-7.143H0v2.857zM4.286 4.286H0v2.857h7.143V0H4.286v4.286zM12.856 20h2.858v-4.286H20v-2.857h-7.143V20zm2.858-15.714V0h-2.857v7.143H20V4.286h-4.286z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] minimize-screen';

export default Icon
