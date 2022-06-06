import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { readReviews } from '../../../store/review';
import Reviews from "./Reviews";
import './Reviews.css'

const ReviewDetails = () => {

    const { businessId } = useParams();

    const dispatch = useDispatch();
    const reviewsObj = useSelector(state => state.reviewState.reviews);
    const user = useSelector(state => state.sessionState.user)
    const reviews = Object.values(reviewsObj);

    useEffect(() => {
        dispatch(readReviews(businessId));
    }, [dispatch]);

    return (
        <>
        <div className='reviews-section'>
        <h2>Reviews</h2>
        <Reviews reviews={reviews} user={user} />
        </div>

        </>
    )
}

export default ReviewDetails;
