import { DaDataSuggestion, Helper, BoundsAndLocations, Bound, AddressParts } from './types';

class DaDataHelper implements Helper {

    fiasLevels: { [key: string]: number } = {
        house     : 8,
        street    : 7,
        settlement: 6,
        city      : 4,
        area      : 3,
        region    : 1
    };

    bounds: { [key:string]: { [key:string]: Bound } }  = {
        region: {
            from_bound: { value: 'area' },
            to_bound  : { value: 'house' }
        },
        federalCity: {
            from_bound: { value: 'area' },
            to_bound  : { value: 'house' }
        },
        area: {
            from_bound: { value: 'city' },
            to_bound  : { value: 'house' }
        },
        city: {
            from_bound: { value: 'settlement' },
            to_bound  : { value: 'house' }
        },
        settlement: {
            from_bound: { value: 'street' },
            to_bound  : { value: 'house' }
        },
        street: {
            from_bound: { value: 'street' },
            to_bound  : { value: 'house' }
        },
        house: {}
    };

    getCurrentFiasLevel = (data: AddressParts, value: string): number => {
        if(data) {
            const fiasLevelsKeys = Object.keys(this.fiasLevels);
            const firstPresentPart = fiasLevelsKeys.findIndex((item) => {
                const addressPart = item === 'house' ? `${data['house_type']} ${data['house']}` : data[`${item}_with_type`];

                return !!(addressPart && data[item] && value.indexOf(addressPart) !== -1)
            });

            if(fiasLevelsKeys[firstPresentPart] === 'city' && data.region === data.city) {
                return 1;
            }

            return this.fiasLevels[fiasLevelsKeys[firstPresentPart]];
        }

        return -1;
    };

    getBoundsAndLocations = (searchWithin: string, suggestion: DaDataSuggestion): BoundsAndLocations => {
        /* eslint-disable camelcase */
        const { data } = suggestion;

        if(searchWithin === 'region' && (data[`${searchWithin}_with_type`] === data['city_with_type'])) {
            const { region_fias_id, city_fias_id } = data;

            return {
                ...this.bounds['federalCity'],
                //@ts-ignore
                locations: [{ region_fias_id }, { city_fias_id }]
            }
        }
        /* eslint-enable camelcase */

        return {
            ...this.bounds[searchWithin],
            //@ts-ignore
            locations: [{ [`${searchWithin}_fias_id`]: data[`${searchWithin}_fias_id`] }]
        }
    };

    setDaDataParams = (fiasLevel: number, suggestion: DaDataSuggestion): BoundsAndLocations | {} | void => {
        if (fiasLevel) {
            let requestParams = {};

            switch (fiasLevel) {
                case 1:
                    requestParams = this.getBoundsAndLocations('region', suggestion);
                    break;
                case 3:
                    requestParams = this.getBoundsAndLocations('area', suggestion);
                    break;
                case 4:
                    requestParams = this.getBoundsAndLocations('city', suggestion);
                    break;
                case 6:
                    requestParams = this.getBoundsAndLocations('settlement', suggestion);
                    break;
                case 7:
                    requestParams = this.getBoundsAndLocations('street', suggestion);
                    break;
                default:
                    return {};
            }

            return requestParams;
        }
    };

    getSuggestionString = (value: string, address: AddressParts): string => {
        if(!value || !address) {
            return '';
        }

        const suggestionParts = [
            address.region,
            address.area,
            address.city,
            address.settlement,
            address.street
        ].filter((item) => item);

        return suggestionParts.reduce((suggestionString: string, suggestionPart: string | null) => {
            if(suggestionPart) {
                return suggestionString.replace(new RegExp(`${suggestionPart},`, 'i'), '').trim();
            }

            return suggestionString;
        }, value);
    };

    composeInputValue = (address: AddressParts): string => {
        if (!address) {
            return '';
        }

        return Object.keys(address)
            .filter((item) => item)
            .reduce((addressString, key) => {
                if (address[key]) {
                    if (key === 'region' || (key === 'city' && (address['region'] === address[key]))) {
                        return addressString;
                    }

                    return `${addressString}, ${address[key]}`;
                }

                return addressString;
            }, address.region || '');
    };

    createParsedAddressFromDaDataSuggestion = (data: AddressParts, withoutLetters: boolean = false): AddressParts | void => {
        if(!data) {
            return;
        }

        const [blockNum = null, building_type = null, buildingNum = null] = data.block ? data.block.split(' ') : [];
        const house = data.house ? withoutLetters ? data.house : `${data.house_type} ${data.house}` : null;
        const block = blockNum ? withoutLetters ? blockNum : `${data.block_type} ${blockNum}` : null;
        const building = buildingNum ? withoutLetters ? buildingNum : `${building_type} ${buildingNum}` : null;
        const flat = data.flat ? withoutLetters ? data.flat : `${data.flat_type} ${data.flat}` : null;

        return {
            region    : data.region_with_type,
            area      : data.area_with_type,
            city      : data.city_with_type,
            settlement: data.settlement_with_type,
            street    : data.street_with_type,
            house     : house,
            block     : block,
            building  : building,
            flat      : flat,
        }
    };
}


export default DaDataHelper;
