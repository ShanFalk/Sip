import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import { readBusiness } from "../../../../store/business";
import { createReview } from "../../../../store/review";
import Navigation from "../../../Navigation";
import './CreateReview.css'

const CreateReview = () => {

    const { businessId } = useParams();

    const [ rating, setRating ] = useState(5);
    const [ answer, setAnswer ] = useState('');
    const [ errors, setErrors ] = useState([]);
    const dispatch = useDispatch();
    const user = useSelector(state => state.sessionState.user);
    const business = useSelector(state => state.businessState.businesses)
    const userId = user?.id;
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

        setErrors([]);

        const review = {
            userId,
            businessId,
            rating,
            answer
        }

        dispatch(createReview(review))
            .then(() => history.push(`/businesses/${businessId}`))
            .catch( async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })

    }

    useEffect(() => {

        dispatch(readBusiness(businessId))
            .catch( async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })

    }, [dispatch])

    return (
        <>
        <Navigation />
        <div className='wrap'>
        <div className='review-container'>
            <h1 className='review-h1'>{business.title}</h1>
            <div className='review-form-container'>
                <form className='review-form' onSubmit={onSubmit}>
                    <div className='text-div'>
                        <ul>
                            {errors.map((error, idx) => <li className='error-text' key={idx}>{error}</li>)}
                        </ul>
                        <label className='rating-label'>Enter your rating</label>
                        <input className='rating' type='number' min='1' max='5' value={rating} onChange={(e) => setRating(e.target.value)}/>
                        <textarea
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className='review-textarea'
                        placeholder="Doesn't look like much when you walk past, but I was practically dying of thirst so I popped in. The definition of a hole-in-the-wall. I got the regular iced black tea and wow…  there are no words. A classic tea done right. Robust flavor, ice cold; the perfect afternoon pick-me-up. There's about a million options available between the menu board and wall full of specials, so it can get a little overwhelming, but you really can't go wrong. Not much else to say besides go see for yourself! You won't be disappointed."/>
                    </div>
                    <button className='review-submit'>Submit</button>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default CreateReview;
