import React, { Component, ReactElement, RefObject } from 'react';

//@ts-ignore
import I18n from 'core-ui__i18n';
//@ts-ignore
import { isConstant } from 'lib-ui__helper';

import Input from '../';

import labels from '../labels';
import { TextAreaProps, DefaultTextAreaProps } from './types';


class TextArea extends Input<TextAreaProps> {
    static displayName: string = '[component] input-text-area';

    static defaultProps: DefaultTextAreaProps = {
        rows         :  5,
        required     : false,
        noLabel      : false,
        spellCheck   : 'false',
        label        : 'defaultLabel',
        errorPosition: 'bottom'
    };

    constructor(props: TextAreaProps) {
        super(props);

        this.textarea = React.createRef();
    }

    textarea: RefObject<HTMLTextAreaElement>;

    componentDidMount() {
        if(this.props.value && this.props.value.length) {
            this.setState({
                watch: true,
                valid: !!(this.textarea.current && this.textarea.current.validity.valid)
            })
        }
    }

    get elTextArea() {
        const { cols, rows, name, autoFocus, autoComplete, disabled, required, spellCheck } = this.props;
        const valid = this.state.valid && this.state.watch;
        const invalid = !this.state.valid && this.state.watch;

        return <textarea
            ref={this.textarea}
            className={this.cn('textarea', { 'textarea_valid': valid, 'textarea_invalid': invalid })}
            cols={cols}
            rows={rows}
            required={required}
            name={name}
            disabled={disabled}
            spellCheck={spellCheck}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            onChange={this.onChange}
            onBlur={this.onBlur}
            value={this.state.value}
        />
    }

    get elError(): ReactElement<HTMLSpanElement> | void {
        if(this.state.showError && this.state.validationMessage) {
            return <span className={this.cn('textarea__error', `textarea__error_${this.props.errorPosition}`)}>{this.state.validationMessage}</span>
        }
    }

    get elLabeledTextArea() {
        const labelText = isConstant(this.props.label) ? this.props.label : labels[this.props.label];

        return (
            <label
                className={this.cn('textarea__label')}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <fieldset className={this.cn('textarea__fieldset', {
                    'textarea__fieldset_invalid': this.watch && !this.state.valid,
                    'textarea__fieldset_valid'  : this.watch && this.state.valid
                })}>
                    <I18n tagName="legend" className={this.cn('textarea__legend', {
                        'textarea__legend_invalid': this.watch && !this.state.valid,
                        'textarea__legend_valid'  : this.watch && this.state.valid
                    })} children={labelText}/>
                    {this.elTextArea}
                    {this.elError}
                </fieldset>
            </label>
        )
    }

    render() {
        return this.props.noLabel ? this.elTextArea : this.elLabeledTextArea;
    }
}

export default TextArea;
