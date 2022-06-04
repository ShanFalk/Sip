import squareStar from '../../../../images/square.png'

const Reviews = ({reviews}) => {

    return (
        <>
        <div className='reviews-container'>
        {reviews.map((review) => (
            <div  key={review.id} className='reviews-div'>
                    <ul className='reviews-ul'>
                        <li className='review-user'>
                            {review.User.username}
                        </li>
                        <div>
                        {[...new Array(review.rating)].map((star, idx) => (
                            <li key={idx} className='review-rating'>
                                <img src={squareStar}/>
                            </li>
                        ))}
                        </div>
                        <li className='review-answer'>
                            {review.answer}
                        </li>
                    </ul>
            </div>
        ))}
        </div>
        </>
    )
}

export default Reviews;
