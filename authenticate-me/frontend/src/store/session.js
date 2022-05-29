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

export const loginUser = (user) => async (dispatch) => {

    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify(user)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(setSession(data.user));
    }

    return res;

}

export const restoreUser = () => async (dispatch) => {
    const res = await csrfFetch('/api/session');
    if (res.ok) {
        const data = await res.json();
        dispatch(setSession(data.user));
    }
    return res;
}

export const signupUser = (user) => async (dispatch) => {
    const res = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(user)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(setSession(data.user));
    }

    return res;

}

const initialState = { user: null }

const sessionReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case SET_SESSION:
            newState = { ...state, user: action.user }
            return newState;
        case DELETE_SESSION:
            newState = { user: null }
            return newState;
        default:
            return state;
    }
}

export default sessionReducer;
