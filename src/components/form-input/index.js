import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-async';
import classNames from 'classnames/bind';

import I18n, { isConstant } from 'core-ui__i18n';
import { DangerWarning, VisibleOn, VisibleOff } from 'lib-ui__icons';

import style from './style';

const cx = classNames.bind(style);

class FormInput extends Component {

    static displayName = '[component] form-input';

    static defaultProps = {
        elDescription: true,
        elTitle      : true,
        elError      : true
    };

    static propTypes = {
        elDescription  : PropTypes.bool,
        elTitle        : PropTypes.bool,
        elLabel        : PropTypes.bool,
        elError        : PropTypes.bool,
        elEye          : PropTypes.bool,
        width          : PropTypes.number,
        className      : PropTypes.string,
        max            : PropTypes.string,
        min            : PropTypes.string,
        step           : PropTypes.string,
        pattern        : PropTypes.string,
        description    : PropTypes.node,
        title          : PropTypes.node,
        required       : PropTypes.bool,
        type           : PropTypes.string.isRequired,
        name           : PropTypes.string.isRequired,
        customValidity : PropTypes.func,
        onChangeValue  : PropTypes.func,
        defaultValue   : PropTypes.string,
        placeholder    : PropTypes.string,
        requiredSymbol : PropTypes.bool,
        restorePassLink: PropTypes.bool
    };

    state = {
        error       : false,
        validity    : true,
        watch       : false,
        message     : null,
        customError : false,
        showPassword: false
    };

    get elDescription() {
        if(this.props.elDescription && this.props.description) {
            return <span className={cx('form-input__description')}>{this.props.description}</span>
        }
    }

    get requiredSymbol() {
        if(this.props.requiredSymbol) {
            return <span> *</span>
        }
    }

    get restorePasswordLink() {
        if(this.props.restorePassLink) {
            return <I18n tagName={Link} to="#" className={cx('form-input__restore-password')}>TK_DESKTOP__RESTORE-PASSWORD</I18n>
        }
    }

    get elTitle() {
        if(this.props.elTitle && this.props.title) {
            return (
                <span className={cx('form-input__title', { 'form-input__title_link': this.props.restorePassLink })}>
                    {this.props.title}
                    {this.requiredSymbol}
                    {this.restorePasswordLink}
                </span>
            )
        }
    }

    get elError() {
        if(this.props.elError && this.state.error && !this.state.validity) {
            const error = this.state.customError ? <I18n>{this.state.message}</I18n> : this.state.message;

            return (
                <span className={cx('form-input__error')}>
                    <DangerWarning />
                    {error}
                </span>
            )
        }
    }

    onInvalid = (e) => {
        e.preventDefault();

        if(this.state.error && !this.state.watch) {
            this.setState({
                watch      : true,
                message    : e.currentTarget.validationMessage,
                customError: e.currentTarget.validity.customError
            });
        } else {
            this.setState({
                message    : e.currentTarget.validationMessage,
                customError: e.currentTarget.validity.customError
            })
        }
    };

    inputClassName = cx('form-input__input', {
        ['form-input__input_custom']: !this.props.required,
        [this.props.className]      : this.props.elLabel
    });

    onChange = (e) => {
        const basicClass = cx('form-input__input', { [this.props.className]: this.props.elLabel });
        const input = this.input || e.currentTarget;

        this.customValidityMethod(input);

        if(this.state.watch) {
            this.setState({
                validity: input.checkValidity()
            });
        }

        if(input.checkValidity()) {
            this.inputClassName = basicClass;
        }
        this.props.onChangeValue && this.props.onChangeValue(input.value);
    };

    onBlur = (e) => {
        let input = e && e.currentTarget || this.$input;

        this.customValidityMethod(input);

        this.setState({
            watch   : true,
            error   : true,
            validity: e.currentTarget.checkValidity()
        });
    };

    onClickShowPassword = (e) => {
        if(this.props.elEye) {
            e && e.stopPropagation();

            this.setState({
                showPassword: !this.state.showPassword
            });
        }
    };

    customValidityMethod(node) {
        if(node && node.setCustomValidity) {
            node.setCustomValidity('');

            if(node.validity.valueMissing) {
                node.setCustomValidity('TK_DESKTOP__FORM-INPUT_ERROR-MESSAGE-EMPTY');
            } else if(node.validity.patternMismatch) {
                node.setCustomValidity('TK_DESKTOP__FORM-INPUT_ERROR-MESSAGE-PATTERN');
            } else if(!node.validity.valid) {
                node.setCustomValidity('TK_DESKTOP__FORM-INPUT_ERROR-MESSAGE-INVALID');
            }

            if(this.props.customValidity) {
                this.props.customValidity(node);
            }
        }
    }

    get elInput() {
        const passwordType = this.state.showPassword ? 'text' : 'password';
        const type = this.props.type === 'password' ? passwordType : this.props.type;
        const props = {
            type,
            className   : this.inputClassName,
            name        : this.props.name,
            required    : this.props.required,
            pattern     : this.props.pattern,
            onInvalid   : this.onInvalid,
            onChange    : this.onChange,
            onBlur      : this.onBlur,
            min         : this.props.min,
            max         : this.props.max,
            defaultValue: this.props.defaultValue,
            'data-watch': this.state.watch,
            step        : this.props.step,
            placeholder : this.props.placeholder
        };
        let input;

        if(isConstant(this.props.placeholder)) {
            input = <I18n tagName="input" {...props} />
        } else {
            input = <input ref={(node) => { this.input = node }} {...props} />
        }

        if(this.props.elEye) {
            return (
                <div className={cx('form-input__password-wrapper')}>
                    {input}
                    {this.elEye}
                </div>
            )
        } else {
            return input;
        }
    }

    get elEye() {
        const props = {
            className: cx('form-input__password-eye'),
            onClick  : this.onClickShowPassword
        };

        if(this.state.showPassword) {
            return <VisibleOff {...props} />
        } else {
            return <VisibleOn {...props} />
        }
    }

    render() {
        const labelClass = cx('form-input__label', this.props.className);
        let title;

        if(this.props.elTitle) {
            title = this.elTitle
        }

        return (
            <label className={labelClass} data-width={this.props.width}>
                {title}
                {this.elInput}
                {this.elError}
                {this.elDescription}
            </label>
        );
    }

}

export default FormInput;
