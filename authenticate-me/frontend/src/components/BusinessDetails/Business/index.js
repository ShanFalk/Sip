import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { readBusiness } from '../../../store/business';
import Navigation from '../../Navigation';
import BusinessFormPage from '../../BusinessFormPage';
import './Business.css';
import UpdateBusiness from '../UpdateBusiness';

const Business = () => {

    const { businessId } = useParams();
    const dispatch = useDispatch();
    const business = useSelector(state => state.businessState.businesses);
    const user = useSelector(state => state.sessionState.user);
    const [openForm, setOpenForm] = useState(false);

    useEffect(() => {

        dispatch(readBusiness(businessId));

    }, [dispatch]);

    return (
        <>
        <Navigation />
        {openForm && (
            <>
            <UpdateBusiness business={business} />
            <button className='toggle-edit-button' onClick={() => setOpenForm(!openForm)}>Cancel</button>
            </>
            )}
        {!openForm && (
            <div className='biz-container'>
            {user.id === business.ownerId && (
            <button className='toggle-edit-button' onClick={() => setOpenForm(!openForm)}>Edit</button>
            )}
            <div className='biz-headline'>
                <img className='biz-pic' src={business.imageUrl}/>
                <h1>{business.title}</h1>
            </div>
            <div>
                <h2>Location</h2>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state}</p>
                    <p>{business.zipCode}</p>
            </div>
            <div className='about'>
                <h2>About the Business</h2>
                <p>{business.description}</p>
            </div>
            <div>
                <h2>Reviews</h2>
            </div>
        </div>
        )}
        </>
    )
}

export default Business;
