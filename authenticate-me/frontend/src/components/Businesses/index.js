import Navigation from '../Navigation';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Businesses = () => {

    const { term } = useParams();
    const businesses = useSelector(state => state.businessState.list)
    console.log(businesses);

    return (
        <>
        <Navigation />
        <div className='search-results-div'>
        <h2>Browsing {term} businesses</h2>
        {businesses.map((business) => (
            <div key={business.id} className='search-result-div'>
                <div className='result-img-div'>
                    <img src={business.imageUrl}/>
                </div>
                <div className='result-info-div'>
                    <ul>
                        <li className='result-text'>
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
