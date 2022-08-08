import { csrfFetch } from "./csrf";

export const createReview = (review) => async (dispatch) => {
    const res = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(review)
    })
    if (res.ok) {
        const data = await res.json();
        return data;
    }
}
