import squareStar from '../../../../images/square.png'
import DeleteReview from '../DeleteReview';

const Reviews = ({reviews, user}) => {

    return (
        <>
        <div className='reviews-container'>
        {reviews.map((review) => (
            <div  key={review.id} className='reviews-div'>
                    <ul className='reviews-ul'>
                        <li className='review-user'>
                            {review.User.username}
                        </li>
                        <div className='star-rating-div'>
                        {[...new Array(review.rating)].map((star, idx) => (
                            <li key={idx} className='review-rating'>
                                <img className='star' src={squareStar}/>
                            </li>
                        ))}
                        </div>
                        <li className='review-answer'>
                            {review.answer}
                        </li>
                        {user?.id === review.User.id && (
                        <li>
                            <DeleteReview reviewId={review.id}/>
                        </li>
                        )}
                    </ul>
            </div>
        ))}
        </div>
        </>
    )
}

export default Reviews;
