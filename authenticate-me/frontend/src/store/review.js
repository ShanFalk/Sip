import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = 'review/LOAD_REVIEWS';
const ADD_REVIEW = 'review/ADD_REVIEW';
const DELETE_REVIEW = 'review/DELETE_REVIEW';

const loadReviews = (payload) => {
    return {
        type: LOAD_REVIEWS,
        payload
    }
}

export const readReviews = (businessId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${businessId}`);
    if (res.ok) {
        const reviews = await res.json();
        dispatch(loadReviews(reviews));
    }
}

const initialState = { reviews: {} }

const reviewReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case LOAD_REVIEWS:
            newState = {...state, reviews: {}};
            action.payload.reviews?.forEach(review => {
                newState.reviews[review.id] = review;
            })
            return newState;
        default:
            return state;
    }
}

export default reviewReducer;
