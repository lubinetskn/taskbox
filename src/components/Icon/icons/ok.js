// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <polygon points="17,6 15.5,4.5 7.7,12.4 4.5,9.3 3,10.8 7.7,15.5 9.2,13.9 9.2,13.9" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] ok';

export default Icon
