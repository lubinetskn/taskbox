// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className, onClick }: { className: string, onClick: (event: SyntheticEvent) => void }): null | React$Element<*> => (
    <svg onClick={onClick} className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <polygon points="18.3,4.5 10,11.9 1.7,4.5 0,6.6 10,15.5 20,6.6" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] arr_down';

export default Icon
