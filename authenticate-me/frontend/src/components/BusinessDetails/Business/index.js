import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Business.css';


const Business = ({business}) => {

    const user = useSelector(state => state.sessionState.user);

    return (
        <>
            <div className='biz-container'>
                <div className='biz-headline'>
                    <img className='biz-pic' src={business.imageUrl} />
                    <h1>{business.title}</h1>
                </div>
                <div className='review-button-div'>
                    {user && (
                    <Link className='review-button page-font' to='/businesses/review'>
                    <i class="fa-regular fa-star fa-xl"></i>
                    Write a Review
                    </Link>
                    )}
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
            </div>
        </>
    )
}

export default Business;
