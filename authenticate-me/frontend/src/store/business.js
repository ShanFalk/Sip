import { csrfFetch } from "./csrf";

const ADD_BUSINESS = 'business/ADD_BUSINESS';
const DELETE_BUSINESS = 'business/DELETE_BUSINESS';
const LOAD_BUSINESSES = 'business/LOAD_BUSINESSES';
const UPDATE_BUSINESS = 'business/UPDATE_BUSINESS';

const addBusiness = (business) => {
    return {
        type: ADD_BUSINESS,
        business
    }
}

export const createBusiness = (business) => async (dispatch) => {

    const res = await csrfFetch('/api/businesses', {
        method: 'POST',
        body: JSON.stringify(business)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(addBusiness(data.business));
    }
}


const initialState = { business: null }

const businessReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case ADD_BUSINESS:
            newState = { ...state, business: action.business }
            return newState;
        default:
            return state;
    }
}

export default businessReducer;