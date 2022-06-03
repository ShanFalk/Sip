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
