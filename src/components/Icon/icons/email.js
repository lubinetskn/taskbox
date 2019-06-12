// @flow
import React from 'react'
import classNames from 'classnames/bind'
import style from './style'

const cx = classNames.bind(style);

const Icon = ({ className }: { className: string }): null | React$Element<*> => (
    // eslint-disable-next-line camelcase
    <svg width="10" height="10" className={cx({ svg_email: !className }, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M13.296 9.688l4.58-4.062v8.64l-4.58-4.578zM2.92 15.062h14.16l-4.626-4.626-.397.35c-.567.504-1.312.756-2.056.756s-1.49-.252-2.056-.755l-.397-.35L2.92 15.06zm-.795-9.436l4.58 4.062-4.58 4.58V5.625zm14.83-.688H3.046L8.69 9.946c.71.63 1.91.63 2.62 0l5.646-5.008zM19 5.5c0-.63-.35-1.173-.863-1.463l-.073-.083-.03.026c-.22-.104-.462-.168-.72-.168H2.687c-.26 0-.502.064-.722.168l-.03-.026-.073.083C1.35 4.327 1 4.87 1 5.5v9c0 .26.064.503.17.723l-.006.004.015.014c.164.334.433.603.766.768l.015.014.005-.004c.22.106.463.17.723.17h14.625c.26 0 .503-.065.724-.17l.003.004.015-.014c.333-.165.602-.434.767-.767l.015-.013-.004-.004c.103-.22.167-.463.167-.723v-9z" />
    </svg>
);

Icon.displayName = '[lib-ui__icons] email';

export default Icon
