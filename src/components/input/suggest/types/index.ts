export type AddressParts = {
    [key:string]: string | null;
}

export type DaDataSuggestion = {
    value             : string;
    unrestricted_value: string;
    data              : AddressParts;
}

export type State = {
    isFullAddress             : boolean,
    addressString             : string;
    chosenSuggestion          : DaDataSuggestion | null,
    suggestionList            : DaDataSuggestion[] | null;
    previousSuggestions       : DaDataSuggestion[] | null;
    showSuggestions           : boolean;
    showAddressSummary        : boolean;
    showDidYouMeanBlock       : boolean;
    noFlat                    : boolean;
    noChosenSuggestion        : boolean;
    noValidSuggestionsReceived: boolean;
    watchOnBlur               : boolean;
    fiasLevel                 : number;
    address                   : AddressParts;
    suggestionsDisabled       : boolean;
}

export type Props = {
    disabled?                 : boolean;
    getAddress?               : Function;
    getSuggestionsStatus?     : Function;
    getNoValidSuggestionsFlag?: Function;
    className?                : string;
    classNames?               : { [key:string]: string | undefined };
}

export type Bound = { value: string };

export type BoundsAndLocations = {
    from_bound: Bound;
    to_bound  : Bound;
    locations : Array<{ [key:string]: string }>
};

export interface Helper {
    fiasLevels: { [key: string]: number };
    bounds: {
        [key: string]: { [key: string]: Bound } | {}
    },
    getCurrentFiasLevel: (data: AddressParts, value: string) => number;
    getBoundsAndLocations: (searchWithin: string, suggestion: DaDataSuggestion) => BoundsAndLocations;
    setDaDataParams: (fiasLevel: number, suggestion: DaDataSuggestion) => BoundsAndLocations | {} | void;
    getSuggestionString: (value: string, address: AddressParts) => string;
    composeInputValue: (address: AddressParts) => string;
    createParsedAddressFromDaDataSuggestion: (data: AddressParts, withOutLetters: boolean) => AddressParts | void;
}


