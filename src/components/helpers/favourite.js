import actions from 'booker-ui__favourite/actions';

export const toggle = (transport, dispatch, { id, action, type, gameTs }) => {
    const params = {
        ids: [id],
        type
    };

    if(gameTs) {
        params.createAt = gameTs;
    }

    return transport
        .publish('site./favorites/v1', {
            method: action,
            params
        })
        .then(
            (payload) => {
                dispatch(actions[action](payload));
            },
            console.error
        );
};

export const get = (transport, dispatch) => {
    return transport
        .publish('site./favorites/v1', { method: 'get' })
        .then(
            (payload) => {
                dispatch(actions.get(payload));
            },
            console.error
        );
};

export default {
    toggle,
    get
};
