import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { readBusinesses } from '../../store/business';
import './Navigation.css';

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(readBusinesses(searchTerm))
            .then(history.push(`/search/${searchTerm}`))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }
    return (
        <>
            <div className='search-bar'>
                <form className='search-form' onSubmit={onSubmit}>
                    <label className='search-label' htmlFor='term'></label>
                    <input className='search-input'
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type='search' name='term'
                    placeholder='Queen Mary, Seattle, elegant...'>
                    </input>
                    <button className='search-button'>
                        <i className="fa-solid fa-magnifying-glass fa-2x"></i>
                    </button>
                </form>
            </div>
        </>
    )
}

export default SearchBar;
