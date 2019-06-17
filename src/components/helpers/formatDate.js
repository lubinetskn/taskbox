import React from 'react';
import moment from 'moment';
import I18n from 'core-ui__i18n';

export const formatDate = (ts) => {
    const momentCache = moment(ts);
    let current = new Date(ts);
    let today = new Date();
    let yesterday = new Date();
    let publicationYear = parseInt(momentCache.format('YYYY'), 10);

    yesterday.setDate(yesterday.getDate() - 1);

    if(current.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)) {
        return <I18n children="TK_DESKTOP__NEWS-PUBLISHED-TODAY" time={momentCache.format('HH:mm')} />
    } else if(current.setHours(0, 0, 0, 0) === yesterday.setHours(0, 0, 0, 0)) {
        return <I18n children="TK_DESKTOP__NEWS-PUBLISHED-YESTERDAY" time={momentCache.format('HH:mm')} />
    } else {
        if(today.getFullYear() !== publicationYear) {
            return <I18n children="TK_DESKTOP__NEWS-PUBLISHED-PREV-YEAR" date={momentCache.format('DD MMMM YYYY')} time={momentCache.format('HH:mm')} />
        } else {
            return <I18n children="TK_DESKTOP__NEWS-PUBLISHED" date={momentCache.format('DD MMMM')} time={momentCache.format('HH:mm')} />
        }
    }
};

export default {
    formatDate
}
