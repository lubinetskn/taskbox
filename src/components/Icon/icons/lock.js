// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <path d="M6.9,5.9c0-1.3,1-2.8,3.1-2.8s3.1,1.5,3.1,2.8v3.3H6.9V5.9z M15.4,9V5.9C15.4,3.5,13.6,1,10,1S4.4,3.5,4.4,5.9v3.3H1.8V19h16.4V9H15.4z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] lock';

export default Icon
