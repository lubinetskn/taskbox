// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    // eslint-disable-next-line camelcase
    <svg className={cx({ svg_outline: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <path d="M13.264,1H6.736c-0.951,0-1.73,0.778-1.73,1.73v14.54c0,0.951,0.778,1.73,1.73,1.73h6.527c0.951,0,1.73-0.778,1.73-1.73V2.73C14.994,1.778,14.215,1,13.264,1z M5.407,2.697c0-0.717,0.587-1.304,1.304-1.304h6.578c0.717,0,1.304,0.587,1.304,1.304V3.41c0,0.053-0.043,0.096-0.096,0.096H5.503c-0.053,0-0.096-0.043-0.096-0.096V2.697z M14.593,17.301c0,0.717-0.587,1.304-1.304,1.304H6.711c-0.717,0-1.304-0.587-1.304-1.304v-0.713c0-0.053,0.043-0.096,0.096-0.096h8.994c0.053,0,0.096,0.043,0.096,0.096V17.301z M14.594,15.976c0,0.084-0.068,0.152-0.152,0.152H5.558c-0.084,0-0.152-0.068-0.152-0.152V4.023c0-0.084,0.068-0.152,0.152-0.152h8.885c0.084,0,0.152,0.068,0.152,0.152V15.976z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] mobile';

export default Icon
