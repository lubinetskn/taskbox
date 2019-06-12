// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className, onClick }: { className: string, onClick: (event: SyntheticEvent) => void }): React$Element<*> => (
    <svg className={cx({ svg: !className }, className)} onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
        <path d="M12.6,13.6L14,15l5-5l-5-5l-1.4,1.4L15.2,9H5.5v2h9.7L12.6,13.6z" />
        <path d="M3,19h14c1.1,0,2-0.9,2-2v-2h-2v2H3V3h14v2h2V3c0-1.1-0.9-2-2-2H3C1.9,1,1,1.9,1,3v14C1,18.1,1.9,19,3,19z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] logout';

export default Icon
