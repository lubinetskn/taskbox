import {
    addBet,
    removeBet
} from 'lib-ui__betslip/common/betslip.actions';

export default (bets, outcome, dispatch, transport) => {
    const bet = {
        id        : outcome.id,
        odd       : outcome.value,
        factorId  : outcome.facId,
        type      : outcome.marketTitle,
        group     : outcome.partTitle,
        name      : outcome.title,
        gameId    : outcome.eventGameId,
        teams     : outcome.eventTeam,
        score     : outcome.score,
        base      : outcome.adValue,
        eventId   : outcome.eventId,
        partName  : outcome.partName,
        marketId  : outcome.marketId,
        marketType: outcome.marketType,
        outcomeKey: outcome.outcomeKey,
        locked    : outcome.locked,
        comment   : outcome.eventComment,
        eventType : outcome.eventType,
        topicId   : outcome.topicId
    };

    if(bets && bets.length) {
        const index = bets.findIndex((item) => item.id === outcome.id);

        if(index === -1) {
            dispatch(addBet(bet, transport));
        } else {
            dispatch(removeBet(outcome.id, outcome.eventId));
        }
    } else {
        dispatch(addBet(bet, transport));
    }
}
