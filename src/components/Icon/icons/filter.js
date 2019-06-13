import React from 'react';

const Icon = ({ className, onClick }) => (
    <svg className={className} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
        <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
        <path fill="none" d="M0 0h24v24H0z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] filter';

export default Icon