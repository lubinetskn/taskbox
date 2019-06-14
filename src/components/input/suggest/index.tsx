import React, { Component, ReactElement, Fragment, FocusEvent, RefObject, ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
//@ts-ignore
import _debounce from 'lodash.debounce';

//@ts-ignore
import I18n from 'core-ui__i18n';
//@ts-ignore
import getConcatenatedStringFromArray from 'component/helpers/getConcatenatedStringFromArray';

import TextInput from '../text';
import DaDataHelper from './daDataHelper';
import { State, Props, DaDataSuggestion, AddressParts } from './types';
import style from './style.pcss';

const DEBOUNCE_TIMEOUT = 500;
const SUGGESTION_COUNT = 5;
const initialAddress = {
    region    : null,
    area      : null,
    city      : null,
    settlement: null,
    street    : null,
    house     : null,
    block     : null,
    building  : null,
    flat      : null
};

const Helper = new DaDataHelper();

const cn = classNames.bind(style);

class InputWithSuggest extends Component<Props, State> {

    static displayName = '[component] input:suggest';

    static contextTypes = {
        store    : PropTypes.object,
        transport: PropTypes.object
    };

    state: State = {
        isFullAddress             : false,
        addressString             : '',
        suggestionList            : null,
        chosenSuggestion          : null,
        previousSuggestions       : [],
        noChosenSuggestion        : true,
        noValidSuggestionsReceived: false,
        showSuggestions           : false,
        showAddressSummary        : false,
        showDidYouMeanBlock       : false,
        noFlat                    : false,
        watchOnBlur               : false,
        suggestionsDisabled       : false,
        fiasLevel                 : 0,
        address                   : initialAddress
    };

    componentDidMount() {
        document.addEventListener('click', this.onClickDocument)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onClickDocument)
    }

    componentDidUpdate() {
        if(this.props.disabled && this.state.addressString.length) {
            this.setState({ addressString: '' });
        }
    }

    inputElement:HTMLInputElement | null = null;

    getInputRef = (ref: HTMLInputElement) => {
        this.inputElement = ref;
    };

    onClickDocument = () => {
        return this.state.showSuggestions && this.setState({ showSuggestions: false })
    };

    doWeNeedToShowDidYouMean = (isEmpty: boolean) => {
        const { previousSuggestions } = this.state;
        const previousSuggestionsIsNotEmpty = previousSuggestions && previousSuggestions.length > 0;
        let showDidYouMeanBlock = !!(isEmpty && previousSuggestionsIsNotEmpty && !this.state.chosenSuggestion);

        this.setState({
            showDidYouMeanBlock
        })
    };

    requestAddress = _debounce((value: string) => {
        if(value.length >= 3) {
            let requestBody = {
                query: value,
                count: SUGGESTION_COUNT
            };

            if(this.state.chosenSuggestion) {
                requestBody = {
                    ...requestBody,
                    ...Helper.setDaDataParams(this.state.fiasLevel, this.state.chosenSuggestion)
                }
            }

            return fetch('/suggest/address', {
                method : 'POST',
                headers: {
                    Accept        : 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            })
                .then((response) => response.json())
                .then((response: { suggestions: DaDataSuggestion[] }) => {
                    const { suggestions } = response;
                    const isEmpty = suggestions.length === 0;

                    this.setState({
                        previousSuggestions       : this.state.suggestionList || this.state.previousSuggestions,
                        suggestionList            : response.suggestions,
                        showSuggestions           : true,
                        noValidSuggestionsReceived: isEmpty
                    }, () => {
                        if(this.state.noValidSuggestionsReceived && this.props.getNoValidSuggestionsFlag) {
                            this.props.getNoValidSuggestionsFlag(this.state.noValidSuggestionsReceived);
                        }
                        this.doWeNeedToShowDidYouMean(isEmpty);
                    })
                })
                .catch((error) => {
                    console.error(error);

                    this.setState({
                        suggestionsDisabled: true,
                        addressString      : ''
                    }, () => {
                        if(this.props.getSuggestionsStatus) {
                            this.props.getSuggestionsStatus(this.state.suggestionsDisabled)
                        }
                    })
                })
        } else {
            this.setState({
                noFlat            : false,
                showAddressSummary: false,
                address           : initialAddress,
                suggestionList    : null,
                chosenSuggestion  : null,
                showSuggestions   : false
            }, () => {
                if(this.props.getAddress) {
                    this.props.getAddress({}, this.state.noFlat);
                }
            })
        }
    }, DEBOUNCE_TIMEOUT);

    getAddress = (item: DaDataSuggestion): AddressParts | void => {
        if(!item || !item.data) {
            return this.state.address;
        }

        const address = Helper.createParsedAddressFromDaDataSuggestion(item.data);

        if(this.props.getAddress) {
            this.props.getAddress(Helper.createParsedAddressFromDaDataSuggestion(item.data, true), this.state.noFlat);
        }

        return address;
    };

    getInputValue = (value: string) => {
        this.setState((state) => ({
            addressString             : value,
            noValidSuggestionsReceived: false,
            watchOnBlur               : false,
            fiasLevel                 : state.chosenSuggestion ? Helper.getCurrentFiasLevel(state.chosenSuggestion.data, value) : 0
        }),
        () => this.requestAddress(this.state.addressString))
    };

    onClickChooseSuggestion = (item: DaDataSuggestion) => {
        return () => this.setState((state) => {
                const address = this.getAddress(item) || this.state.address;
                const addressString = Helper.composeInputValue(address);

                return {
                    address,
                    addressString,
                    isFullAddress: !!(address.region && (address.city || address.settlement) && address.house && (address.flat || state.noFlat)),
                    noFlat: state.noFlat,
                    chosenSuggestion: item,
                    fiasLevel: item.data.fias_level ? parseInt(item.data.fias_level, 10) : this.state.fiasLevel,
                    showSuggestions: false,
                    showAddressSummary: true,
                    showDidYouMeanBlock: false
                }
            }, () => {
                if (this.inputElement) {
                    this.inputElement.setCustomValidity && this.inputElement.setCustomValidity('');
                    this.inputElement.focus();
                }
            });
    };

    getConcatenatedStringFromArray = (arrayOfStrings: Array<string | null>): string | null => {
        return Array.isArray(arrayOfStrings)
            ? arrayOfStrings.filter(Boolean).join(', ')
            : null;
    };

    get elSuggestionList(): ReactElement<HTMLDivElement> | void {
        if(this.state.showSuggestions && this.state.suggestionList) {
            const { suggestionList, address }  = this.state;
            const suggestions = suggestionList.map((suggestion) => {
                if(address.region === suggestion.data.city_with_type && suggestion.data.fias_level === "1") {
                    return null;
                }

                return  (
                    <div key={suggestion.value} onClick={this.onClickChooseSuggestion(suggestion)} className={cn('input-with-suggest__suggestion')}>
                        {suggestion.value}
                    </div>
                )
            });

            return (
                <div className={cn('input-with-suggest__suggestion-list', { 'input-with-suggest__suggestion-list_empty': !suggestions.length })}>
                    {suggestions.length ? suggestions : <I18n children="TK_INPUT-WITH-SUGGEST__NO-SUGGESTIONS" />}
                </div>
            )
        }
    }

    get elAddressSummary() {
        if(this.state.showAddressSummary) {
            const { address: { region, area, city, settlement, street, house, block, building, flat } } = this.state;
            const rows = [{
                name : 'region-area',
                value: this.getConcatenatedStringFromArray([region, area])
            }, {
                name : 'city-settlement',
                value: this.getConcatenatedStringFromArray([city, settlement])
            }, {
                name : 'street',
                value: street
            }, {
                name : 'house',
                value: house
            }, {
                name : 'block-building',
                value: this.getConcatenatedStringFromArray([block, building])
            }, {
                name : 'flat',
                value: flat
            }];

            return (
                <div className={cn('input-with-suggest__address-summary')}>
                    {
                        rows.map(({ name, value }) => {
                            if(name === 'flat') {
                                return this.elAddressSummaryFlatRow;
                            }

                            return (
                                <div key={name} className={cn('input-with-suggest__address-summary-row')}>
                                    <I18n
                                        className={cn('input-with-suggest__address-summary-row-title')}
                                        children={`TK_INPUT-WITH-SUGGEST__${name.toUpperCase()}`}
                                    />
                                    {value ? value : <I18n children={'TK_INPUT-WITH-SUGGEST__NOT-SPECIFIED'} />}
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }

    onChangeSetNoFlat = (e: ChangeEvent<HTMLInputElement>) => {
        e && e.persist();

        this.setState(({ address }) => ({
            isFullAddress: !!(address.region && (address.city || address.settlement) && address.house && (address.flat || e.target.checked)),
            noFlat       : e.target.checked
        }), () => {
            if(this.props.getAddress && this.state.chosenSuggestion) {
                this.props.getAddress(
                    Helper.createParsedAddressFromDaDataSuggestion(this.state.chosenSuggestion.data, true),
                    this.state.noFlat
                );
            }
        });
    };

    onBlurWatch = (e: FocusEvent<HTMLInputElement>) => {
        if(e && e.target && typeof e.target.value !== 'undefined') {
            this.setState({
                watchOnBlur: e.target.value.length === 0
            })
        }
    };

    get elAddressSummaryFlatRow() {
        return (
            <div key="flat" className={cn('input-with-suggest__address-summary-row')}>
                <I18n
                    className={cn('input-with-suggest__address-summary-row-title')}
                    children="TK_INPUT-WITH-SUGGEST__FLAT"
                />
                {this.state.address.flat ? this.state.address.flat : <I18n children={'TK_INPUT-WITH-SUGGEST__NOT-SPECIFIED'} />}
                {!this.state.address.flat && (
                    <Fragment>
                        <input onChange={this.onChangeSetNoFlat} className={cn('input-with-suggest__no-flat-checkbox')} type="checkbox" />
                        <I18n className={cn('input-with-suggest__no-flat-label')} children="TK_INPUT-WITH-SUGGEST__NO-FLAT" />
                    </Fragment>
                )}
            </div>
        )
    }

    get elDidYouMeanBlock() {
        if(this.state.showDidYouMeanBlock && this.state.previousSuggestions && this.state.previousSuggestions.length) {
            return (
                <Fragment>
                    <I18n
                        className={cn('input-with-suggest__did-you-mean')}
                        children="TK_INPUT-WITH-SUGGEST__DID-YOU-MEAN"
                    />
                    <span onClick={this.onClickChooseSuggestion(this.state.previousSuggestions[0])}>{this.state.previousSuggestions[0].value}</span>
                </Fragment>
            )
        }
    }

    get elInput() {
        const { watchOnBlur, suggestionsDisabled, isFullAddress, addressString } = this.state;
        const { className, classNames, disabled } = this.props;

        return (
            <TextInput
                required
                className={cn('input-with-suggest__input', className)}
                classNames={{
                    label   : cn('input-with-suggest__input-label'),
                    fieldset: cn('input-with-suggest__input-fieldset', { 'input-with-suggest__input-fieldset_valid': isFullAddress }),
                    legend  : cn('inpur-with-suggest__input-legend', { 'input-with-suggest__input-legend_valid': isFullAddress }),
                    ...classNames
                }}
                name="searchAddress"
                disabled={disabled || suggestionsDisabled}
                watch={!addressString && watchOnBlur}
                label="searchAddress"
                externalValue={addressString}
                getRef={this.getInputRef}
                getInputValue={this.getInputValue}
                onBlur={this.onBlurWatch}
            />
        )
    }

    render() {
        return (
            <div className={cn('input-with-suggest')}>
                {this.elInput}
                {this.elDidYouMeanBlock}
                {this.elAddressSummary}
                {this.elSuggestionList}
            </div>
        )
    }
}

export default InputWithSuggest;
