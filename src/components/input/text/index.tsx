import React, { Component, ReactElement, RefObject } from 'react';
//@ts-ignore
import MaskedInput, { conformToMask } from 'react-text-mask';

//@ts-ignore
import { isConstant } from 'lib-ui__helper';
//@ts-ignore
import I18n from 'core-ui__i18n';

import Input from '../';
import config from './config';
import labels from '../labels';
import { TextInputProps, DefaultTextInputProps } from './types';

class TextInput extends Input<TextInputProps> {

    static displayName = '[component] input:text';

    static defaultProps: DefaultTextInputProps = {
        type              : 'text',
        autoComplete      : 'off',
        disabled          : false,
        required          : false,
        label             : 'defaultLabel',
        configName        : 'config',
        errorPosition     : 'bottom',
        className         : '',
        classNames        : {
            error   : '',
            label   : '',
            fieldset: '',
            legend  : ''
        }
    };

    componentDidMount() {
        if(this.props.getRef) {
            this.props.getRef(this.input);
        }

        if(this.props.value) {
           this.setValidityMessage(this.input);

           this.setState({
               valid: !!(this.input && this.input.validity.valid),
               watch: true
           });
        }
    }

    input: HTMLInputElement | null = null;

    get elInput(): ReactElement<HTMLInputElement> {
        const { autoComplete, type, required, mask, configName, name, disabled, externalValue, className, dataSet } = this.props;
        const value = typeof externalValue !== 'undefined' ? externalValue : this.state.value;
        const inputConfig = config[configName] || {};
        const currentMask = inputConfig.mask || mask;
        const dataSetObj: { [key:string]: any } = {};

        if(dataSet) {
            for(let key in dataSet) {
                dataSetObj[`data-${key}`] = dataSet[key];
            }
        }

        if(inputConfig.placeholder && isConstant(inputConfig.placeholder)) {
            inputConfig.placeholder = this.getConstantTranslation(inputConfig.placeholder);
        }

        if(currentMask) {
            const conformedValue: string = conformToMask(value, currentMask).conformedValue;
            // По умолчанию react-text-mask не предоставляет возможности получать ref-инпута,
            // поэтому мы перекрываем их дефолтный пропс render, чтобы получить необходимый нам кef
            const render = (maskedInputRef: Function, props: any) => {
                return (() => {
                    return (
                        <input
                            ref={(ref) => {
                                this.input = ref;
                                maskedInputRef(ref)
                            }}
                            {...props}
                        />)
                })();
            };

            return <MaskedInput
                    render={render}
                    disabled={disabled}
                    mask={mask}
                    className={this.cn('input', className)}
                    autoComplete={autoComplete}
                    type={type}
                    required={required}
                    name={name}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    value={conformedValue}
                    {...dataSetObj}
                    {...inputConfig}
                />

        }

        return <input
                disabled={disabled}
                ref={(ref: HTMLInputElement) => this.input = ref}
                className={this.cn('input', className)}
                autoComplete={autoComplete}
                type={type}
                required={required}
                name={name}
                value={value}
                onChange={this.onChange}
                onBlur={this.onBlur}
                {...dataSetObj}
                {...inputConfig}
            />
    }

    get elError(): ReactElement<HTMLSpanElement> | void {
        if(this.state.showError && this.state.validationMessage && !this.props.hideValidationMessage && !this.props.disabled) {
            const { errorPosition, classNames: { error: className } } = this.props;

            return (
                <span className={this.cn('input__error', `input__error_${errorPosition}`, className)} >
                    {this.state.validationMessage}
                </span>
            )
        }
    }

    get elLabeledInput(): ReactElement<HTMLSpanElement> {
        const { label: title, name, disabled, classNames: { label, fieldset, legend } } = this.props;
        let legendText = isConstant(title) ? title : labels[title];

        return (
            <label
                htmlFor={name}
                className={this.cn('input__label', label)}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <fieldset className={this.cn('input__fieldset', {
                    'input__fieldset_invalid': this.watch && !this.state.valid && !disabled,
                    'input__fieldset_valid'  : this.watch && this.state.valid && !disabled
                }, fieldset)}>
                    <I18n
                        className={this.cn('input__legend', {
                                'input__legend_invalid': this.watch && !this.state.valid && !disabled,
                                'input__legend_valid'  : this.watch && this.state.valid && !disabled
                            }, legend)}
                        tagName="legend"
                        children={legendText}
                    />
                    {this.elInput}
                    {this.elError}
                </fieldset>
            </label>
        )
    }

    render() {
        return this.props.noLabel ? this.elInput : this.elLabeledInput;
    }
}

export default TextInput;
