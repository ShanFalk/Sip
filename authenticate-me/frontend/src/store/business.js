import { csrfFetch } from "./csrf";

const ADD_BUSINESS = 'business/ADD_BUSINESS';
const DELETE_BUSINESS = 'business/DELETE_BUSINESS';
const LOAD_BUSINESSES = 'business/LOAD_BUSINESSES';
const UPDATE_BUSINESS = 'business/UPDATE_BUSINESS';
const LOAD_BUSINESS = 'business/LOAD_BUSINESS';

const addBusiness = (payload) => {
    return {
        type: ADD_BUSINESS,
        payload
    }
}

const loadBusinesses = (payload) => {
    return {
        type: LOAD_BUSINESSES,
        payload
    }
}

const loadBusiness = (payload) => {
    return {
        type: LOAD_BUSINESS,
        payload
    }
}

const editBusiness = (payload) => {
    return {
        type: UPDATE_BUSINESS,
        payload
    }
}

const deleteBusiness = (payload) => {
    return {
        type: DELETE_BUSINESS,
        payload
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

export const updateBusiness = (business) => async (dispatch) => {

    const res = await csrfFetch(`/api/businesses/${business.id}`, {
        method: 'PUT',
        body: JSON.stringify(business)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(editBusiness(data.business));
    }
}

export const readBusinesses = (term) => async (dispatch) => {
    const res = await csrfFetch(`/api/businesses/search/${term}`);

    if (res.ok) {
        const businesses = await res.json();
        dispatch(loadBusinesses(businesses));
    }
}

export const readBusiness = (businessId) => async (dispatch) => {
    const res = await csrfFetch(`/api/businesses/${businessId}`);
    if (res.ok) {
        const business = await res.json();
        dispatch(loadBusiness(business));
    }
}

export const removeBusiness = (businessId) => async (dispatch) => {
    const res = await csrfFetch(`/api/businesses/${businessId}`, {
        method: 'DELETE'
    });
    if (res.ok) {
        const id = await res.json();
        dispatch(deleteBusiness(id));
    }
}


const initialState = { businesses: {} }

const businessReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case ADD_BUSINESS:
            newState = { ...state, businesses: {...action.payload} }
            return newState;
        case LOAD_BUSINESSES:
            newState = {...state, businesses:{}};
            action.payload.businesses?.forEach(business => {
                newState.businesses[business.id] = business;
            })
            return newState;
        case LOAD_BUSINESS:
            newState = {...state, businesses: {...action.payload.business}};
            return newState;
        case UPDATE_BUSINESS:
            newState = {...state, businesses: {...action.payload}};
            return newState;
        case DELETE_BUSINESS:
            newState = {...state};
            newState.businesses = {};
            return newState;
        default:
            return state;
    }
}

export default businessReducer;
