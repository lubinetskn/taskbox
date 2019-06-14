import React, { Component, Fragment, ReactElement } from 'react';
import classNames from 'classnames/bind';
//@ts-ignore
import { isConstant } from 'lib-ui__helper';
//@ts-ignore
import I18n from 'core-ui__i18n';

import { Props } from './types';
import style from '../style.pcss';

const cn = classNames.bind(style);

export default (props: Props): ReactElement<HTMLDivElement> => (
    <div className={cn('radio-group')}>
        <I18n className={cn('radio-group__title')} children={props.title} />
        <div className={cn('radio-group__buttons')}>
            {
                props.options.map(({ name, value, label, defaultChecked }) => {
                    return (
                        <label className={cn('radio-group__button-label')} key={value}>
                            <input name={name} defaultChecked={defaultChecked} type="radio" value={value} />
                            <I18n className={cn('radio-group__button-label')} children={label} />
                        </label>
                    )
                })
            }
        </div>
    </div>
)
