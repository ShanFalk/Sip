import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { readBusiness } from "../../store/business";
import Navigation from "../Navigation";
import Business from "./Business";
import UpdateBusiness from "./UpdateBusiness";

const BusinessDetails = () => {

    const { businessId } = useParams();

    const dispatch = useDispatch();
    const business = useSelector(state => state.businessState.businesses);
    const user = useSelector(state => state.sessionState.user);

    const [isEditing, setIsEditing] = useState(false);

    const onEditEnd = () => (setIsEditing(false));

    const onEditStart = () => (setIsEditing(true));

    useEffect(() => {

        dispatch(readBusiness(businessId));

    }, [dispatch]);


    return (
        <>
        <Navigation />
        {isEditing && (
            <UpdateBusiness props={business}/>
        )}
        <Business business={business}/>
        </>
    )
}

export default BusinessDetails;
