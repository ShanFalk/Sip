import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { removeReviewOnBusiness } from "../../../../store/business";


const DeleteReview = ({ reviewId }) => {

    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    const { businessId } = useParams();

    const onClick = (e) => {
        e.preventDefault();

        dispatch(removeReviewOnBusiness(reviewId, businessId))
            .catch( async res => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })
    }

    return (
        <>
        <button className='delete-button page-font' onClick={onClick}>Delete</button>
        </>
    )
}

export default DeleteReview;
