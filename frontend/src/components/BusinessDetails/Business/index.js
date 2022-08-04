import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Business.css';
import squareStar from '../../../images/square.png';


const Business = ({ business }) => {

    const user = useSelector(state => state.sessionState.user);

    const reviewState = useSelector(state => state.reviewState.reviews);
    let reviews = Object.values(reviewState);
    let reviewTotal = reviews.reduce((accum, currVal) => accum + currVal.rating, 0)
    let avgReview = Math.round(reviewTotal / reviews.length)
    return (
        <>
            <div className='biz-container'>
                <div className='biz-headline'>
                    <div className='biz-pic-grid'>
                        <img className='biz-pic' src={business.imageUrl} alt='a tea business' />
                        <img className='biz-pic' src={business.imageUrl} alt='a tea business' />
                        <img className='biz-pic' src={business.imageUrl} alt='a tea business' />
                        <img className='biz-pic' src={business.imageUrl} alt='a tea business' />
                    </div>
                    <div className='biz-title-div'>
                        <h1>{business.title}</h1>
                        <div className='avg-rating-div'>
                            {[...new Array(avgReview)].map((star, idx) => (
                                <div key={idx} className='review-rating'>
                                    <img className='star' src={squareStar} alt='a star inside a square' />
                                </div>
                            ))}
                            <span className='review-count'>{reviews.length} reviews</span>
                        </div>
                        <p><i className="fa-regular fa-circle-check"></i>claimed</p>
                    </div>
                </div>
                <section>
                    {user && (
                        <div className='review-button-div'>
                            <Link className='review-button page-font' to={`/review/${business.id}`}>
                                <i className="fa-regular fa-star fa-xl"></i>
                                Write a Review
                            </Link>
                        </div>
                    )}
                </section>
                {/* <div>
                    <h2>Location</h2>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state}</p>
                    <p>{business.zipCode}</p>
                </div> */}
                {/* <div className='about'>
                    <h2>About the Business</h2>
                    <p>{business.description}</p>
                </div> */}
            </div>
        </>
    )
}

export default Business;
