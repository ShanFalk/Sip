import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { readReviews } from '../../../store/review';
import Reviews from "./Reviews";
import './Reviews.css'

const ReviewDetails = ({business}) => {

    const user = useSelector(state => state.sessionState.user)
    const reviews = business.Reviews;

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
