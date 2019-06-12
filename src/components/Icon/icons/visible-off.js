// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className, onClick }: { className: string, onClick: (event: SyntheticEvent) => void }): null | React$Element<*> => (
    <svg onClick={onClick} className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <path d="M10,5.1c2.5,0,4.5,2,4.5,4.5c0,0.6-0.1,1.1-0.3,1.7l2.7,2.7c1.4-1.1,2.5-2.6,3.1-4.3c-1.6-4-5.5-6.8-10-6.8C8.7,2.8,7.5,3,6.4,3.4l2,2C8.9,5.2,9.4,5.1,10,5.1z M0.9,2.6l2.1,2L3.4,5C1.9,6.2,0.7,7.8,0,9.5c1.6,4,5.5,6.8,10,6.8c1.4,0,2.8-0.3,4-0.8l0.4,0.4l2.6,2.7l1.2-1.2L2.1,1.4L0.9,2.6z M5.9,7.6l1.4,1.4c0,0.2-0.1,0.4-0.1,0.6c0,1.5,1.2,2.7,2.7,2.7c0.2,0,0.4,0,0.6-0.1l1.5,1.5c-0.6,0.3-1.3,0.5-2,0.5c-2.5,0-4.5-2-4.5-4.5C5.5,8.8,5.6,8.1,5.9,7.6z M9.9,6.8l2.9,2.9V9.6c0-1.5-1.2-2.7-2.7-2.7L9.9,6.8z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] visible_off';

export default Icon
