const config: { [key:string]: any } = {
    documentNumber: {
        mask       : [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
        pattern    : '^(([\\s)(.-]+)?\\d){10}$',
        placeholder: 'TK_INPUT__DOCUMENT-NUMBER-PLACEHOLDER'
    },
    name: {
        pattern: '^[а-яА-ЯёЁ\\-\\s]+$'
    },
    date: {
        mask       : [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        pattern    : '(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}',
        placeholder: 'TK_INPUT__DATE-PLACEHOLDER'
    },
    departmentCode: {
        mask       : [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
        pattern    : '^[\\-\\d]{7}$',
        placeholder: 'TK_INPUT__DEPARTMENT-CODE-PLACEHOLDER'
    },
    region: {
        pattern: '^[а-яА-ЯёЁ\\-\\s().,]+$' //включает в себя регионы и области России
    },
    area: {
        pattern: '^[а-яА-ЯёЁ\\-\\s().,]+$'
    },
    settlement: {
        pattern: '^[а-яА-ЯёЁ\\-\\d\\s().,—IVX]+$'
    },
    city: {
        pattern: '^[а-яА-ЯёЁ\\-\\d\\s().,—IVX]+$'
    },
    street: {
        pattern: '^[а-яА-ЯёЁ\\-\\d\\s().—IVX]+$'
    },
    number: {
        type   : 'text',
        pattern: '^[а-яА-ЯёЁ\\-()—\\/\\d\\s]+$'
    },
    email:{
        pattern: '^[\\w\\-.]+@[\\w\\-.]+\\.[a-z]{2,}$'
    },
    flat: {
        pattern: '^[\\d]{1,5}$'
    },
    inn: {
        pattern    : '^\\d{12}$',
        mask       : [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
        placeholder: 'TK_INPUT__INN-PLACEHOLDER'
    },
    snils: {
        pattern    : '^[\\-\\d\\s]{14}$',
        mask       : [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, ' ', /\d/, /\d/],
        placeholder: 'TK_INPUT__SNILS-PLACEHOLDER'
    },
    config: {}
};

export default config;
