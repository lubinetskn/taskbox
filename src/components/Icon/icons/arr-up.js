// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className, onClick }: { className: string, onClick: (event: SyntheticEvent) => void }): null | React$Element<*> => (
    <svg onClick={onClick} className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <polygon points="1.7,15.5 10,8.1 18.3,15.5 20,13.4 10,4.5 0,13.4" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] arr_up';

export default Icon
