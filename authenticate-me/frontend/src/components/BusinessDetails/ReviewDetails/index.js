import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { readReviews } from '../../../store/review';

const ReviewDetails = () => {

    const { businessId } = useParams();

    const dispatch = useDispatch();
    const reviews = useSelector(state => state.reviewState.reviews)

    useEffect(() => {
        dispatch(readReviews(businessId));
    }, [dispatch]);

    return (
        <>
        <h2>Reviews</h2>

        </>
    )
}

export default ReviewDetails;
