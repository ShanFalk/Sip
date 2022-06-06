import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeReview } from "../../../../store/review";


const DeleteReview = ({ reviewId }) => {

    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    const onClick = (e) => {
        e.preventDefault();

        dispatch(removeReview(reviewId))
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
