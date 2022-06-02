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

const loadBusinesses = (businesses) => {
    return {
        type: LOAD_BUSINESSES,
        businesses
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

export const readBusinesses = (term) => async (dispatch) => {
    const res = await csrfFetch(`/api/businesses/search/${term}`);

    if (res.ok) {
        const businesses = await res.json();
        dispatch(loadBusinesses(businesses))
    }
}


const initialState = { businesses: {} }

const businessReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case ADD_BUSINESS:
            newState = { ...state, businesses: [...state.businesses, action.business] }
            return newState;
        case LOAD_BUSINESSES:
            console.log(action.businesses);
            newState = {...state, businesses: {...state.businesses}};
            action.businesses.forEach(business => {
                newState.businesses[business.id] = business;
            })
            return newState;
        default:
            return state;
    }
}

export default businessReducer;
