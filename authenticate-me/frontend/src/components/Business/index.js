import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { readBusiness } from '../../store/business';
import Navigation from '../Navigation';

const Business = () => {

    const { businessId } = useParams();
    const dispatch = useDispatch();
    const business = useSelector(state => state.businessState.businesses);

    useEffect(() => {

        dispatch(readBusiness(businessId));

    }, [dispatch]);
    return (
        <>
        <Navigation />
        </>
    )
}

export default Business;
