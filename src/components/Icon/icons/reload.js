// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <path d="M16.2,13.9c-0.8,1.7-2.3,3-4.3,3.4c-3.4,0.8-6.8-1.3-7.6-4.8S5.6,5.7,9,4.9c1.4-0.4,2.7-0.2,3.9,0.4L10.1,8l7.8-0.5L15.7,0l-1.3,3.1C12.6,2.3,10.5,2,8.5,2.4c-4.8,1.2-7.8,6-6.7,10.7c1.1,4.8,5.8,7.7,10.6,6.6c2.8-0.7,5-2.6,6.1-5.1L16.2,13.9z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] reload';

export default Icon
