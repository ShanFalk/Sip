import Navigation from "../Navigation";
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createBusiness } from '../../store/business';
import '../../styles/Form.css';
import roadMapPic from '../../images/road-map.png';


const BusinessFormPage = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.sessionState.user);
    const ownerId = sessionUser.id;

    if (!sessionUser) return (
        <Redirect to='/' />
    )

    const onSubmit = (e) => {
        e.preventDefault();

            setErrors([]);

            const business = {
                ownerId,
                title,
                description,
                address,
                city,
                state,
                zipCode,
                imageUrl
            }

            dispatch(createBusiness(business))
                .then(() => history.push('/'))
                .catch(async (res) => {
                        const data = await res.json();
                        if (data && data.errors) setErrors(data.errors);
                });
    }

    return (
        <>
        <Navigation />
            <main className='biz-form-main'>
                <img className='road-map-biz-pic' src={roadMapPic} alt='a road map' />
                <div className='biz-form-div'>
                    <div className='login-form-header'>
                        <h2>Add a Business</h2>
                    </div>
                    <form className='biz-form' onSubmit={onSubmit}>
                        <ul>
                            {errors.map((error, idx) => <li className='error-text' key={idx}>{error}</li>)}
                        </ul>
                        <label className='biz-form-labels' htmlFor='title'>Title</label>
                        <input
                            className='biz-form-field'
                            type='text'
                            placeholder='Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                         <label className='biz-form-labels' htmlFor='description'>Description</label>
                        <textarea
                            className='biz-form-field biz-textarea'
                            placeholder='Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                         <label className='biz-form-labels' htmlFor='address'>Address</label>
                        <input
                            className='biz-form-field'
                            type='text'
                            placeholder='Address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                         <label className='biz-form-labels' htmlFor='city'>City</label>
                        <input
                            className='biz-form-field'
                            type='text'
                            placeholder='City'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                         <label className='biz-form-labels' htmlFor='state'>State</label>
                        <input
                            className='biz-form-field'
                            type='text'
                            placeholder='State'
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                         <label className='biz-form-labels' htmlFor='zipCode'>Zip Code</label>
                        <input
                        className='biz-form-field'
                        type='text'
                        placeholder='Zip Code'
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        />
                         <label className='biz-form-labels' htmlFor='imageUrl'>Image URL</label>
                        <input
                        className='biz-form-field'
                        type='text'
                        placeholder='Image URL'
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        />
                        <button className='page-font add-biz-button' type='submit'>Add Business</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default BusinessFormPage;
