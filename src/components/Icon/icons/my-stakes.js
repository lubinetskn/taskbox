// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <path d="M8.9,5.6h3.1c0-0.2,0-0.3,0-0.5c0-0.6,0.1-1.6,0-2.1c-0.6-1.8-1.9-2.3-3.4-2.3S6,1.2,5.5,3c-0.1,0.5,0,1.5,0,2.1c0,0.8,0,1.4,0.2,2.1C6.1,8.4,6.5,9.3,7.1,10c-2.3,0.4-3.8,1.6-4.9,2.1c-2.2,1-2.2,2-2.2,2v1.8h8.9V5.6H8.9z" />
        <path d="M18.8,6.7v0.8c0,0.4-0.3,0.7-0.7,0.7h-0.4c-0.4,0-0.7-0.3-0.7-0.7V6.7h-1.3v0.8c0,0.4-0.3,0.7-0.7,0.7h-0.4c-0.4,0-0.7-0.3-0.7-0.7V6.7h-1.3v0.8c0,0.4-0.3,0.7-0.7,0.7h-0.4c-0.4,0-0.7-0.3-0.7-0.7V6.7H9.9v0.8v11v0.8h1.2v-0.8c0-0.4,0.3-0.7,0.7-0.7h0.4c0.4,0,0.7,0.3,0.7,0.7v0.8h1.2v-0.8c0-0.4,0.3-0.7,0.7-0.7h0.4c0.4,0,0.7,0.3,0.7,0.7v0.8H17v-0.8c0-0.4,0.3-0.7,0.7-0.7h0.4c0.4,0,0.7,0.3,0.7,0.7v0.8H20v-0.8v-11V6.7H18.8z M18.8,15.9h-7.7v-0.7h7.7V15.9z M18.8,14.2h-7.7v-0.7h7.7V14.2z M18.8,12.5h-7.7v-0.7h7.7V12.5z M18.8,10.8h-7.7v-0.7h7.7V10.8z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] my_stakes';

export default Icon
