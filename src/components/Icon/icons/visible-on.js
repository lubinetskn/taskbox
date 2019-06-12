// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className, onClick }: { className: string, onClick: (event: SyntheticEvent) => void }): null | React$Element<*> => (
    <svg onClick={onClick} className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <path d="M10,3.2C5.5,3.2,1.6,6,0,10c1.6,4,5.5,6.8,10,6.8S18.4,14,20,10C18.4,6,14.5,3.2,10,3.2z M10,14.5c-2.5,0-4.5-2-4.5-4.5s2-4.5,4.5-4.5s4.5,2,4.5,4.5S12.5,14.5,10,14.5z M10,7.3c-1.5,0-2.7,1.2-2.7,2.7s1.2,2.7,2.7,2.7s2.7-1.2,2.7-2.7S11.5,7.3,10,7.3z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] visible_on';

export default Icon
