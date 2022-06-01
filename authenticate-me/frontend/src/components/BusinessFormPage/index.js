import Navigation from "../Navigation";
import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createBusiness } from '../../store/business';
import '../../styles/Form.css';
import sipLogo from '../../images/teapot.png';
import cafePic from '../../images/coffee-shop-clipart-8.jpg';


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
    const sessionUser = useSelector(state => state.sessionState.user);

    const onSubmit = (e) => {
        e.preventDefault();

            setErrors([]);

            const business = {
                title,
                description,
                address,
                city,
                state,
                zipCode,
                imageUrl
            }

            return dispatch(createBusiness(business))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
    }

    return (
        <>
        <Navigation />
            <main>
                <img className='cafe-login-pic' src={cafePic} alt='a table and two chairs outside' />
                <div className='login-form-div'>
                    <div className='login-form-header'>
                        <h2>Add a Business</h2>
                    </div>
                    <form className='login-form' onSubmit={onSubmit}>
                        <ul>
                            {errors.map((error, idx) => <li className='error-text' key={idx}>{error}</li>)}
                        </ul>
                        <input
                            className='form-field'
                            type='text'
                            placeholder='Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            className='form-field'
                            placeholder='Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <input
                            className='form-field'
                            type='text'
                            placeholder='Address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <input
                            className='form-field'
                            type='text'
                            placeholder='City'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <input
                            className='form-field'
                            type='text'
                            placeholder='State'
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                        <input
                        className='form-field'
                        type='text'
                        placeholder='Zip Code'
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        />
                        <input
                        className='form-field'
                        type='text'
                        placeholder='Image URL'
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        />
                        <button className='page-font submit-button' type='submit'>Add Business</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default BusinessFormPage;
