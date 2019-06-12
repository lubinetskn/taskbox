// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    // eslint-disable-next-line camelcase
    <svg width="10" height="10" className={cx({ svg_video_review: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g>
            <rect x="0.5" y="0.5" width="23" height="23" />
            <path d="M23,1v22H1V1H23 M24,0H0v24h24V0L24,0z" />
        </g>
        <line x1="0.625" y1="20.625" x2="6.042" y2="20.625" />
        <line x1="9.625" y1="20.625" x2="23.979" y2="20.625" />
        <circle cx="7.844" cy="20.719" r="1.531" />
        <polygon points="7.844,16.084 7.85,3.862 18.431,9.979 " />
    </svg>
);

Icon.displayName = '[lib-ui__icons] video-review';

export default Icon

