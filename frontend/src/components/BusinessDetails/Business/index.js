import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SipMap from "../../Map";
import './Business.css';
import squareStar from '../../../images/square.png';


const Business = ({business}) => {

    const user = useSelector(state => state.sessionState.user);

    const lat = parseFloat(business?.lat)
    const lng = parseFloat(business?.lng)

    let avgReview;
    let reviews;
    if (business?.Reviews.length > 0) {
        reviews = business?.Reviews;
        let reviewTotal = reviews?.reduce((accum, currVal) => accum + currVal.rating, 0)
        avgReview = Math.round(reviewTotal / reviews?.length)
    }
    return (
        <>
            <div className='biz-container'>
                <div className='biz-headline'>
                    <div className='biz-pic-grid'>
                        <img className='biz-pic' src={business?.imageUrl} alt='a tea business' />
                        <img className='biz-pic' src={business?.imageUrl} alt='a tea business' />
                        <img className='biz-pic' src={business?.imageUrl} alt='a tea business' />
                        <img className='biz-pic' src={business?.imageUrl} alt='a tea business' />
                    </div>
                    <div className='biz-title-div'>
                        <h1>{business?.title}</h1>
                        <div className='avg-rating-div'>
                            {[...new Array(avgReview)].map((star, idx) => (
                                <div key={idx} className='review-rating'>
                                    <img className='star' src={squareStar} alt='a star inside a square' />
                                </div>
                            ))}
                            <span className='review-count'>{reviews?.length} reviews</span>
                        </div>
                        <p><i className="fa-regular fa-circle-check"></i>claimed</p>
                    </div>
                </div>
                <div className='biz-details-grid'>
                    <div>
                        <section className='section'>
                            {user && (
                                <div className='review-button-div'>
                                    <Link className='review-button page-font' to={`/review/${business?.id}`}>
                                        <i className="fa-regular fa-star fa-xl"></i>
                                        Write a Review
                                    </Link>
                                </div>
                            )}
                        </section>
                        <section className='section'>
                            <div>
                                <h2>Location</h2>
                                <SipMap lat={lat} lng={lng} />
                                <div className='address-div'>
                                    <p>{business?.address}</p>
                                    <p className='address-bold'>{business?.city}, {business?.state} {business?.zipCode}</p>
                                </div>
                            </div>
                        </section>
                        <section className='section'>
                            <div className='about'>
                                <h2>About the Business</h2>
                                <p>{business?.description}</p>
                            </div>
                        </section>
                    </div>
                    <div className='contact-sticky'>
                        <div className='contact-inner-sticky'>
                            <div className='sticky-section'>
                                <h2 className='contact-me-h2'>Contact Me</h2>
                                <a className='no-decor' href='https://www.linkedin.com/in/shannon-falk-16097a83/'><button className='contact-btn' type='button'><i className="fa-brands fa-linkedin contact-linkedin-icon"></i>LinkedIn</button></a>
                            </div>
                            <div className='sticky-section'>
                                <div className='sticky-portfolio'>
                                    <a className='no-decor blue' href='https://shanfalk.github.io/'>shanfalk.github.io</a>
                                </div>
                                <div>
                                    <div className='sticky-location'>
                                        Pittsburgh, PA
                                    </div>
                                </div>


                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Business;
