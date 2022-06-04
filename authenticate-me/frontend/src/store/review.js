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

const addReview = (payload) => {
    return {
        type: ADD_REVIEW,
        payload
    }
}

const deleteReview = (payload) => {
    return {
        type: DELETE_REVIEW,
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

export const createReview = (review) => async (dispatch) => {
    const res = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(review)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(addReview(data.review));
    }
}

export const removeReview = (reviewId) => async (dispatch) => {

    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
    });
    if (res.ok) {
        const id = await res.json();
        dispatch(deleteReview(id));
    }
}

const initialState = { reviews: {} }

const reviewReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case LOAD_REVIEWS:
            newState = { ...state, reviews: {} };
            action.payload.reviews?.forEach(review => {
                newState.reviews[review.id] = review;
            })
            return newState;
        case ADD_REVIEW:
            newState = { ...state, reviews: { ...action.payload } }
            return newState;
        case DELETE_REVIEW:
        newState = { ...state, reviews: {...state.reviews} };
        console.log('This is the new state', newState)
        console.log('This is the action', action)
        const { deletedReviewId } = action.payload
        delete newState.reviews[deletedReviewId];
        return newState;
        default:
            return state;
    }
}

export default reviewReducer;
