import Navigation from '../Navigation';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Businesses.css';
import { useEffect } from 'react';
import { readBusinesses } from '../../store/business';

const Businesses = () => {

    const { term } = useParams();
    const businesses = useSelector(state => state.businessState.list)
    const dispatch = useDispatch();

    useEffect( () => {

        dispatch(readBusinesses(term))

    }, [dispatch]);

    return (
        <>
        <Navigation />
        <div className='search-results-div'>
        <h2 className='biz-results-h2'>Browsing {term} businesses</h2>
        {businesses.map((business) => (
            <div key={business.id} className='search-result-div'>
                <div className='inner-search-div'>
                    <img className='result-img' src={business.imageUrl}/>
                    <ul className='biz-result-ul'>
                        <li className='result-title'>
                            {business.title}
                        </li>
                        <li className='result-text'>
                            {business.address}
                        </li>
                        <li className='result-text'>
                            {business.city}
                        </li>
                        <li className='result-text'>
                            {business.state}
                        </li>
                        <li className='result-text'>
                            {business.zipCode}
                        </li>
                    </ul>
                </div>
            </div>
        ))}
        </div>
        </>
    )
}

export default Businesses;