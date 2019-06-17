import helper from 'lib-ui__helper';

const warnMessage = 'Incorrect arguments: sportId = %s, categoryId = %s, tournamentId = %s, eventId = %s, categoryTitle = %s, tournamentTitle = %s, children = %o';

export default ({ sport, sportId, categoryId, tournamentId, eventId, categoryTitle, tournamentTitle, children, type }) => {
    const args = [sportId, categoryId, tournamentId, eventId, categoryTitle, tournamentTitle, children];

    if(args.some((item) => !item)) {
        console.warn(warnMessage, ...args);

        return '';
    }

    if(!type) {
        console.warn('Type is not found: %s', type);

        return '';
    } else if(type.includes('.')) {
        type = type.replace('.', '-');
    }

    if(!sport || !sport.sname) {
        console.warn('Cannot find sport or sport.sname is undefined for id: %s', sportId);

        return '';
    }

    const category = `${helper.transliterate(categoryTitle)}-id-${categoryId}`;
    const tournament = `${helper.transliterate(tournamentTitle)}-id-${tournamentId}`;
    const event = `${helper.transliterate(children.join('-'))}-id-${eventId}`;

    return `/bets/${type}/${sport.sname}/${category}/${tournament}/${event}`;
};
