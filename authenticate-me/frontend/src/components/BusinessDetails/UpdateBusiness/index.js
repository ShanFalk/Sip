import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateBusiness } from "../../../store/business";

const UpdateBusiness = ({ business, onSaveEnd }) => {

    const [title, setTitle] = useState(business.title);
    const [description, setDescription] = useState(business.description);
    const [address, setAddress] = useState(business.address);
    const [city, setCity] = useState(business.city);
    const [state, setState] = useState(business.state);
    const [zipCode, setZipCode] = useState(business.zipCode);
    const [imageUrl, setImageUrl] = useState(business.imageUrl);
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();

    const onUpdate = (e) => {
        e.preventDefault();

            setErrors([]);

            const update = {
                ...business,
                title,
                description,
                address,
                city,
                state,
                zipCode,
                imageUrl
            }

            dispatch(updateBusiness(update))
                .then(() => onSaveEnd())
                .catch(async (res) => {
                        const data = await res.json();
                        if (data && data.errors) setErrors(data.errors);
                });
    }

    return (
        <>
        <main className='biz-form-main'>
                <img className='road-map-biz-pic' src={business.imageUrl} alt='business' />
                <div className='biz-form-div'>
                    <div className='login-form-header'>
                        <h2>Update a Business</h2>
                    </div>
                    <form className='biz-form' onSubmit={onUpdate}>
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
                        <button className='page-font add-biz-button' type='submit'>Update Business</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default UpdateBusiness;
