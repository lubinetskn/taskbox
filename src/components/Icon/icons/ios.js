// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    <svg className={cx({ svg: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <path d="M12.6,2.7C13.3,2,13.8,1,13.6,0c-1,0-2.2,0.6-2.9,1.3c-0.6,0.6-1.2,1.7-1,2.7C10.8,4,12,3.5,12.6,2.7z M14.7,9.7c0-2.3,1.8-3.3,1.9-3.4c-1-1.5-2.6-1.7-3.2-1.8c-1.3-0.1-2.6,0.8-3.3,0.8c-0.7,0-1.7-0.8-2.8-0.8c-1.5,0-2.8,0.9-3.6,2.2 c-1.5,2.7-0.4,6.8,1.1,9C5.5,16.8,6.4,18,7.5,18c1.1,0,1.5-0.7,2.8-0.7c1.3,0,1.7,0.7,2.8,0.7c1.2,0,1.9-1.1,2.6-2.2 c0.8-1.3,1.2-2.5,1.2-2.5C17,13.3,14.7,12.4,14.7,9.7z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] ios';

export default Icon
