import PropTypes from 'prop-types';
import React, { Component } from 'react';
import I18n from 'core-ui__i18n';
import classNames from 'classnames/bind';
import { Done, Warning } from 'lib-ui__icons';

import FormInput from '../form-input';

import style from './style';

const cx = classNames.bind(style);

class PasswordRules extends Component {

    static displayName = '[component] password-rule';

    static propTypes = {
        name          : PropTypes.string,
        title         : PropTypes.element,
        className     : PropTypes.string,
        required      : PropTypes.bool,
        elTitle       : PropTypes.bool,
        onChangeValue : PropTypes.func,
        watchProp     : PropTypes.bool,
        requiredSymbol: PropTypes.bool,
        containerClass: PropTypes.string
    };

    constructor() {
        super(...arguments);

        this.regRuleUpperLow = /(?=.*[a-zа-я])(?=.*[A-ZА-Я])[a-zA-Zа-яА-Я]/;
        this.regRuleNumber = /\d/;

        this.state = {
            passRuleLength  : false,
            passRuleUpperLow: false,
            passRuleNumber  : false
        };
    }

    onChangeValue = (e) => {
        const $input = e.target;

        this.setState({
            passRuleLength  : ($input.value.length >= 8 && $input.value.length <= 30),
            passRuleUpperLow: this.regRuleUpperLow.test($input.value),
            passRuleNumber  : this.regRuleNumber.test($input.value)
        });
        if($input.dataset.watch === 'false') {
            $input.dataset.watch = 'true'
        }
    };

    getPasswordRuleCapture(capture) {
        if(capture) {
            return <Done className={cx('password-rule__icon', 'password-rule__icon_done')} />
        }

        return <Warning className={cx('password-rule__icon', 'password-rule__icon_warning')} />
    }

    get elPasswordRules() {
        const rulesData = [
            {
                text   : 'диапозон 8-30 символов',
                capture: this.state.passRuleLength
            },
            {
                text   : 'прописные и строчные буквы',
                capture: this.state.passRuleUpperLow
            },
            {
                text   : 'хотя бы одна цифра',
                capture: this.state.passRuleNumber
            }
        ];

        return (
            <div className={cx('password-rule__rules')} >
                {rulesData.map((item, index) => {
                    return (
                        <div className={cx('password-rule__rule')} key={index}>
                            {this.getPasswordRuleCapture(item.capture)}
                            <I18n className={cx('password-rule__rule-text')}>{item.text}</I18n>
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        const inputProps = {
            ...this.props,
            type : 'password',
            elEye: true
        };

        return (
            <div onChange={this.onChangeValue} className={cx('password-rule__wrapper', this.props.containerClass)}>
                <FormInput ref={(node) => { this.formInput = node }} {...inputProps} />
                {this.elPasswordRules}
            </div>
        )
    }

}

export default PasswordRules;
