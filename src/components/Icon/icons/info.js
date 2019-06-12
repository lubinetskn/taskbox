// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className, onClick }: { className: string, onClick: (event: SyntheticEvent) => void }): null | React$Element<*> => (
    // eslint-disable-next-line camelcase
    <svg onClick={onClick} className={cx({ svg_lightgreen: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <path d="M11.1,5.6H8.9V3.9h2.2C11.1,3.9,11.1,5.6,11.1,5.6z M11.1,16.1H8.9V7.7h2.2C11.1,7.7,11.1,16.1,11.1,16.1z" />
        <path d="M10,1.7c-4.6,0-8.3,3.7-8.3,8.3c0,4.6,3.7,8.3,8.3,8.3c4.6,0,8.3-3.7,8.3-8.3C18.3,5.4,14.6,1.7,10,1.7z M10,17 c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7C17,13.9,13.9,17,10,17z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] info';

export default Icon
