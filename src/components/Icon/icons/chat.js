// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    // eslint-disable-next-line camelcase
    <svg width="10" height="10" className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M19 8.666c0-3.612-4.03-6.54-9-6.54s-9 2.928-9 6.54c0 3.613 4.03 6.543 9 6.543.27 0 .54-.01.804-.028l4.82 2.693L14.6 14.29c2.635-1.142 4.4-3.233 4.4-5.624zm-5.89 4.977l.575 2.015-2.87-1.603c-.267.02-.54.03-.815.03-4.342 0-7.875-2.43-7.875-5.42C2.125 5.68 5.657 3.25 10 3.25c4.342 0 7.875 2.43 7.875 5.416 0 2.228-1.965 4.146-4.766 4.977z" />
        <path d="M4.375 5.5h11.25v1.125H4.375zM4.375 7.75h11.25v1.125H4.375zM4.375 10h11.25v1.125H4.375z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] chat';

export default Icon
