import { useDispatch } from "react-redux";
import { removeBusiness } from "../../../store/business";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";

const DeleteBusiness = () => {

    const dispatch = useDispatch();
    const { businessId } = useParams();
    const history = useHistory();
    const [errors, setErrors] = useState([]);

    const onClick = () => {

        dispatch(removeBusiness(businessId))
            .then(() => history.push('/'))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })

    }

    return (
        <button onClick={onClick} className='page-font delete-button'>Delete</button>
    )
}

export default DeleteBusiness;
