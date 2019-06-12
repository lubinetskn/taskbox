// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    // eslint-disable-next-line camelcase
    <svg className={cx({ svg_outline: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <path d="M18.574,16.786c-1.591-1.587-1.88-1.881-3.474-3.466c-0.143-0.142-0.169-0.232-0.049-0.415c1.118-1.707,1.525-3.579,1.162-5.585c-0.758-4.186-4.713-6.935-8.887-6.209C3.11,1.844,0.321,5.938,1.144,10.157c0.65,3.337,3.515,6.02,7.234,6.179c1.628,0.069,3.138-0.361,4.498-1.265c0.205-0.136,0.301-0.106,0.46,0.054c1.577,1.589,1.864,1.87,3.445,3.454c0.21,0.211,0.436,0.384,0.741,0.426c0.153,0,0.307,0,0.46,0c0.555-0.123,0.896-0.461,1.018-1.017c0-0.154,0-0.307,0-0.461C18.96,17.221,18.785,16.996,18.574,16.786z M8.617,14.544c-3.214-0.024-5.862-2.686-5.83-5.943c0.031-3.197,2.647-5.802,5.88-5.802c3.263,0,5.863,2.617,5.868,5.895C14.541,11.906,11.876,14.568,8.617,14.544z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] search';

export default Icon
