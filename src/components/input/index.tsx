import React, { Component, SyntheticEvent, ChangeEvent, FocusEvent } from 'react';
import PropTypes from 'prop-types';
import * as classNames from 'classnames/bind';

import I18n, { isConstant }  from 'core-ui__i18n';

import { State,  GenericProps } from './types';
import style from './style.pcss';

class Input<P extends GenericProps> extends Component<P, State> {

    static displayName: string = '[component] input';

    static contextTypes = {
        store    : PropTypes.object,
        container: PropTypes.object
    };

    constructor(props: P) {
        super(props);

        this.state = {
            watch            : false,
            valid            : false,
            value            : props.value || '',
            showError        : false,
            validationMessage: null
        };
    }

    get watch() {
        return typeof this.props.watch !== 'undefined' ? this.props.watch : this.state.watch;
    }

    cn = classNames.bind(style);

    getConstantTranslation: Function = (constant: string): string => {
        return I18n.get(constant);
    };

    setValidityMessage: Function = (node: HTMLInputElement|HTMLTextAreaElement): void => {
        if(node) {
           if(node.validity.valueMissing) {
               this.setState({ validationMessage: this.getConstantTranslation('TK_INPUT__ERROR-MESSAGE-EMPTY') });
           } else if(node.validity.patternMismatch) {
                this.setState({ validationMessage: this.getConstantTranslation('TK_INPUT__ERROR-MESSAGE-PATTERN') });
           }

           if(this.props.customValidity && this.props.customValidity()) {
               this.setState({ validationMessage: this.getConstantTranslation(this.props.customValidity()) });
           }
        }
    };

    onChange = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>): void => {
        const value: string = e.target.value;
        const valid: boolean = e.target.validity.valid;

        if(this.props.getInputValue) {
            this.props.getInputValue(value);
        }

        this.setState({
            value,
            valid,
            showError        : false,
            validationMessage: null,
            watch            : !!value.length
        })
    };

    onBlur = (e: FocusEvent<HTMLInputElement|HTMLTextAreaElement> ): void => {
        if(e) {
            e.persist();

            this.setValidityMessage(e.target);

            if(!e.target.validity.valid) {
                this.setState({
                    watch: true
                });
            }

            if(this.props.onBlur) {
                this.props.onBlur(e)
            }
        }
    };

    onMouseEnter = () => {
        if(!this.state.validationMessage) {
            return;
        }

        this.setState({
            showError: true
        })
    };

    onMouseLeave = () => {
        if(!this.state.validationMessage) {
            return;
        }

        this.setState({
            showError: false
        });
    };
}

export default Input;
