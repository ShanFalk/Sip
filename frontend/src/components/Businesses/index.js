import Navigation from '../Navigation';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Businesses.css';
import { useEffect } from 'react';
import { readBusinesses } from '../../store/business';
import noTea from '../../images/no-tea.jpg'

const Businesses = () => {

    const { term } = useParams();
    const businessObj = useSelector(state => state.businessState.businesses)
    const businesses = Object.values(businessObj);
    const dispatch = useDispatch();

    useEffect( () => {

        dispatch(readBusinesses(term));
        localStorage.clear();

    }, [dispatch]);

    return (
        <>
        <Navigation />
        <div className='search-results-div'>
            <div className='wrap'>
            <h2 className='biz-results-h2'>Browsing {term} businesses</h2>
            {businesses.length === 0 && (
                    <div className='no-results-div'>
                        <h3 className='no-results-title'>There's nothing here!</h3>
                        <div className='search-suggest'>
                            <p>Try searching 'tea' or a location</p>
                        </div>
                        <div className='no-tea-div'>
                            <img className ='no-tea' src={noTea} alt='empty tea cups'/>
                        </div>
                    </div>
                )}
            {businesses.map((business) => (
                <div  key={business.id} className='search-result-div'>
                    <div className='inner-search-div'>
                        <Link className='biz-page-link' to={`/businesses/${business.id}`}>
                        <img className='result-img' src={business.imageUrl} alt='business'/>
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
                        </Link>
                    </div>
                </div>
            ))}

            </div>
        </div>
        </>
    )
}

export default Businesses;
