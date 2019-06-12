// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    // eslint-disable-next-line camelcase
    <svg width="10" height="10" className={cx({ svg_danger: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="8" />
        <g>
            <path d="M11.1,11.7H8.9V4.3h2.2V11.7z M11.1,15.7H8.9v-2h2.2V15.7z" />
        </g>
    </svg>
);

Icon.displayName = '[lib-ui__icons] danger_warning';

export default Icon
