import { csrfFetch } from './csrf'

const SET_SESSION = 'session/SET_SESSION';
const DELETE_SESSION = 'session/DELETE_SESSION';

const setSession = (user) => {
    return {
        type: SET_SESSION,
        user
    }
}

const deleteSession = () => {
    return {
        type: DELETE_SESSION
    }
}

export const loginUser = (payload) => async (dispatch) => {

    const res = await csrfFetch('/api/session', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    if (res.ok) {
        const user = await res.json();
        dispatch(setSession(user));
        return user;
    }

}

const initialState = { user: null }

const sessionReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case SET_SESSION:
            newState = { ...state, ...action.user }
            return newState;
        case DELETE_SESSION:
            newState = { ...state, user: null }
            return newState;
        default:
            return state;
    }
}

export default sessionReducer;
