export const LINE_BASE_URL = '/bets/my-line';

export default (sport, category, tournament) => {
    if(sport && category && tournament) {
        return `${LINE_BASE_URL}/${sport.sname}/${category.sname}-id-${category.id}/${tournament.sname}-id-${tournament.id}`
    } else if(sport && category) {
        return `${LINE_BASE_URL}/${sport.sname}/${category.sname}-id-${category.id}`
    } else if(sport) {
        return `${LINE_BASE_URL}/${sport.sname}`
    } else {
        return null;
    }
}
