// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg className={cx({ 'svg_video-play': !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
        <circle cx="40" cy="40" r="36" />
        <path d="M32 58l24-18-24-18v36zm8-58C17.92 0 0 17.92 0 40s17.92 40 40 40 40-17.92 40-40S62.08 0 40 0zm0 72C22.36 72 8 57.64 8 40S22.36 8 40 8s32 14.36 32 32-14.36 32-32 32z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] video-play';

export default Icon
