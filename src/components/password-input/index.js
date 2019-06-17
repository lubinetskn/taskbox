import PropTypes from 'prop-types'
import React, { Component } from 'react'
import I18n from 'core-ui__i18n'

import { VisibleOn, VisibleOff, Ok, DangerWarning } from 'lib-ui__icons'

import style from './style'
import classNames from 'classnames/bind'

const cx = classNames.bind(style);

class PasswordInput extends Component {

    static displayName = '[block] password-input';

    static defaultProps = {
        newPassName    : 'newPassword',
        confirmPassName: 'confirmNewPassword',
        classNames     : {
            wrapper     : '',
            inputNew    : '',
            inputConfirm: ''
        }
    };

    static propTypes = {
        classNames     : PropTypes.object,
        checkValid     : PropTypes.func,
        onChangeValue  : PropTypes.func,
        currentPassword: PropTypes.string,
        newPassName    : PropTypes.string,
        confirmPassName: PropTypes.string
    };

    state = {
        passRuleLength: false,
        passRuleUpper : false,
        passRuleLow   : false,
        passRuleNumber: false,
        formValid     : false,
        valid         : {},
        error         : {},
        value         : {},
        showPassword  : {},
        focused       : false,
        blurred       : false
    };

    regRuleLow = /(?=.*[a-zа-я])[a-zA-Zа-яА-Я]/;

    regRuleUpper = /(?=.*[A-ZА-Я])[a-zA-Zа-яА-Я]/;

    regRuleNumber = /\d/;

    onChangeValue = (e) => {
        const $form = e.currentTarget.querySelectorAll('input');
        const params = {};
        const currentPass = this.props.currentPassword;

        for(let i = 0; $form.length > i; i++) {
            const name = $form[i].name;
            const value = $form[i].value;

            switch(name) {
                case this.props.newPassName:
                case this.props.confirmPassName:
                    params[name] = value;
                    break;
            }
        }

        this.setState({
            passRuleLength: this.checkPassRuleLength(params),
            passRuleUpper : this.checkPassRuleUpper(params),
            passRuleLow   : this.checkPassRuleLow(params),
            passRuleNumber: this.checkPassRuleNumber(params),
            value         : params
        });

        this.props.onChangeValue && this.props.onChangeValue(params);

        if(this.checkPassRuleLength(params) && this.checkPassRuleUpper(params) && this.checkPassRuleLow(params) && this.checkPassRuleNumber(params)) {
            if(params[this.props.newPassName] === currentPass) {
                this.setState({
                    valid: { [this.props.newPassName]: false },
                    error: { [this.props.newPassName]: 'Новый пароль совпадает со старым' }
                }, this.checkInputsValidity);
            } else {
                this.setState({
                    focused: true,
                    valid  : { [this.props.newPassName]: true },
                    error  : { [this.props.newPassName]: false }
                }, this.checkInputsValidity)
            }

            if(params[this.props.newPassName] === params[this.props.confirmPassName]) {
                this.setState({
                    formValid: true,
                    error    : null,
                    valid    : {
                        [this.props.confirmPassName]: true,
                        [this.props.newPassName]    : true
                    }
                }, this.sendStateUpper)
            } else {
                this.setState({ formValid: false }, this.sendStateUpper)
            }
        }
    };

    sendStateUpper = () => {
        this.props.checkValid && this.props.checkValid(this.state.formValid)
    };

    checkPassRuleLength = (params) => {
        return params[this.props.newPassName].length >= 8 && params[this.props.newPassName].length <= 30
    };

    checkPassRuleUpper = (params) => {
        return this.regRuleUpper.test(params[this.props.newPassName])
    };

    checkPassRuleLow = (params) => {
        return this.regRuleLow.test(params[this.props.newPassName])
    };

    checkPassRuleNumber = (params) => {
        return this.regRuleNumber.test(params[this.props.newPassName])
    };

    onBlur = (e) => {
        const confirmed = e && e.target.name === this.props.confirmPassName && this.state.formValid;

        this.setState({
            blurred: confirmed,
            focused: !confirmed
        });

        this.checkInputsValidity();
    };

    onFocus = () => {
        this.setState({
            focused: true,
            blurred: false
        })
    };

    checkInputsValidity = () => {
        const newPass = this.state.value[this.props.newPassName];
        const confirmedPass = this.state.value[this.props.confirmPassName];
        const currentPass = this.props.currentPassword;

        if(!newPass && !confirmedPass) {
            this.setState({
                error: {
                    ...this.state.error,
                    [this.props.newPassName]    : 'Это поле обязательно для заполнения',
                    [this.props.confirmPassName]: 'Это поле обязательно для заполнения'
                },
                valid: {
                    [this.props.newPassName]    : false,
                    [this.props.confirmPassName]: false
                }
            })
        }

        if(newPass) {
            if(!this.state.passRuleLength || !this.state.passRuleUpper || !this.state.passRuleLow || !this.state.passRuleNumber) {
                return this.setState({
                    error: {
                        ...this.state.error,
                        [this.props.newPassName]: 'Пароль не соответствует всем условиям'
                    }
                })
            }
        }

        if(currentPass) {
            if(newPass === currentPass) {
                return this.setState({
                    error: {
                        ...this.state.error,
                        [this.props.newPassName]: 'Новый пароль совпадает со старым'
                    }
                })
            }
        }

        if(!confirmedPass && newPass) {
            this.setState({
                error: {
                    ...this.state.error,
                    [this.props.confirmPassName]: 'Это поле обязательно для заполнения'
                }
            })
        }

        if(newPass && newPass.length > 30) {
            return this.setState({
                error: {
                    ...this.state.error,
                    [this.props.newPassName]: 'Максимум 30 символов'
                }
            })
        }

        if(newPass && confirmedPass) {
            if(newPass !== confirmedPass) {
                return this.setState({ error: { passError: 'Пароли не совпадают' } })
            }
        }
    };

    onClickShowPassword = (id) => () => {
        this.setState({
            showPassword: {
                ...this.state.showPassword,
                [id]: !this.state.showPassword[id]
            }
        });
    };

    get elPasswordRules() {
        if(this.state.focused && !this.state.blurred) {
            const props = {
                className: cx('password-input__rules', {
                    'password-input__rules_valid'  : this.state.formValid,
                    'password-input__rules_invalid': this.state.error && (this.state.error[this.props.newPassName] || this.state.error.passError)
                })
            };

            return (
                <div {...props}>
                    <I18n tagName="div" className={cx('password-input__rule-header')}>Требования к паролю</I18n>
                    <div className={cx('password-input__rule-wrap')}>
                        <I18n data-valid={this.state.passRuleLength} className={cx('password-input__rule')}>8-30 символов</I18n>
                        <Ok className={cx('password-input__ok-rule')} />
                    </div>
                    <div className={cx('password-input__rule-wrap')}>
                        <I18n data-valid={this.state.passRuleUpper} className={cx('password-input__rule')}>Минимум одна заглавная буква	</I18n>
                        <Ok className={cx('password-input__ok-rule')} />
                    </div>
                    <div className={cx('password-input__rule-wrap')}>
                        <I18n data-valid={this.state.passRuleLow} className={cx('password-input__rule')}>Минимум одна строчная буква</I18n>
                        <Ok className={cx('password-input__ok-rule')} />
                    </div>
                    <div className={cx('password-input__rule-wrap')}>
                        <I18n data-valid={this.state.passRuleNumber} className={cx('password-input__rule')}>Минимум одна цифра	</I18n>
                        <Ok className={cx('password-input__ok-rule')} />
                    </div>
                </div>
            )
        }
    }

    elEye(inputName) {
        const props = {
            className: cx('password-input__password-eye'),
            onClick  : this.onClickShowPassword(inputName)
        };

        if(this.state.showPassword[inputName]) {
            return <VisibleOff {...props} />
        } else {
            return <VisibleOn {...props} />
        }
    }

    get elErrorConfirmPassword() {
        if(this.state.error) {
            if(this.state.error[this.props.confirmPassName] || this.state.error.passError) {
                return <I18n className={cx('password-input__error', 'password-input__error_right')}>{this.state.error[this.props.confirmPassName] || this.state.error.passError}</I18n>
            }
        }
    }

    get elInputNewPassword() {
        const isValid = this.state.valid && this.state.valid[this.props.newPassName];
        const props = {
            name     : this.props.newPassName,
            type     : this.state.showPassword[this.props.newPassName] ? 'text' : 'password',
            onBlur   : this.onBlur,
            onFocus  : this.onFocus,
            required : true,
            className: cx('password-input__input', {
                'password-input__input_invalid': this.state.error && (this.state.error[this.props.newPassName] || this.state.error.passError),
                'password-input__input_valid'  : this.state.valid && this.state.valid[this.props.newPassName]
            })
        };

        const className = cx('password-input__fieldset', this.props.classNames.fieldset, `password-input__fieldset_${this.state.valid[this.props.newPassName]}`);
        const legendClass = cx('password-input__title', `password-input__title_valid-${isValid}`);

        return (
            <label className={cx('password-input__label', this.props.classNames.inputNew)}>
                <fieldset className={className}>
                    <I18n tagName="legend" className={legendClass}>Пароль</I18n>
                    <input {...props} />
                    <Ok className={cx('password-input__ok-icon')} />
                    <DangerWarning className={cx('password-input__error-icon')} />
                    {this.elEye(this.props.newPassName)}
                </fieldset>
            </label>
        )
    }

    get elInputConfirmNewPassword() {
        const isError = this.state.error && (this.state.error[this.props.confirmPassName] || this.state.error.passError);
        const isValid = this.state.valid && this.state.valid[this.props.confirmPassName];
        const props = {
            name     : this.props.confirmPassName,
            type     : this.state.showPassword[this.props.confirmPassName] ? 'text' : 'password',
            onBlur   : this.onBlur,
            onFocus  : this.onFocus,
            required : true,
            className: cx('password-input__input', {
                'password-input__input_invalid': isError,
                'password-input__input_valid'  : isValid
            })
        };

        const className = cx('password-input__fieldset', this.props.classNames.fieldset, `password-input__fieldset_${isValid}`);
        const legendClass = cx('password-input__title', `password-input__title_valid-${isValid}`);

        return (
            <label className={cx('password-input__label', this.props.classNames.inputConfirm)}>
                <fieldset className={className}>
                    <I18n tagName="legend" className={legendClass}>Повторите пароль</I18n>
                    <input {...props} />
                    <Ok className={cx('password-input__ok-icon')} />
                    <DangerWarning className={cx('password-input__error-icon')} />
                    {this.elEye(this.props.confirmPassName)}
                    {this.elErrorConfirmPassword}
                </fieldset>
            </label>
        )
    }

    render() {
        return (
            <div onChange={this.onChangeValue} className={cx('password-input', this.props.classNames.wrapper)}>
                {this.elInputNewPassword}
                {this.elPasswordRules}
                {this.elInputConfirmNewPassword}
            </div>
        )
    }

}

export default PasswordInput;
