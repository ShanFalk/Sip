import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { readBusiness } from "../../store/business";
import Navigation from "../Navigation";
import Business from "./Business";
import ReviewDetails from "./ReviewDetails";
import UpdateBusiness from "./UpdateBusiness";

const BusinessDetails = () => {

    const { businessId } = useParams();

    const businessesState = useSelector(state => state.businessState.businesses);
    const businesses = Object.values(businessesState);
    const business = businesses.find((business) => business.id === parseInt(businessId))

    const lat = parseFloat(business?.lat)
    const lng = parseFloat(business?.lng)

    /*
    1. Add business data to localStorage
    2. Retreive from localStorage in Business/index.js
    3. Check for data in localStorage in Businesses/index.js
    4. Clear data from localStorage in Businesses/index.js
    */

    const user = useSelector(state => state.sessionState.user);

    const [isEditing, setIsEditing] = useState(false);
    const [editButton, setEditButton] = useState('Edit Business Info');

    const onEditEnd = () => {
        setIsEditing(false);
        setEditButton('Edit Business Info');
    };

    const onEditStart = () => (setIsEditing(true));

    const onClick = () => {

        setIsEditing(!isEditing);
        if (!isEditing) setEditButton('Cancel');
        if (isEditing) setEditButton('Edit Business Info');

    }


    return (
        <>
            <Navigation />
            {isEditing && (
                <UpdateBusiness business={business} onSaveEnd={onEditEnd} />
            )}
            {!isEditing && (
                <Business business={business} lat={lat} lng={lng}/>
            )}
            {user?.id === business?.ownerId && (
                <button className='toggle-edit-button page-font' onClick={onClick}><i class="fa-solid fa-pencil"></i>{editButton}</button>
            )}
            <ReviewDetails />
        </>
    )
}

export default BusinessDetails;
