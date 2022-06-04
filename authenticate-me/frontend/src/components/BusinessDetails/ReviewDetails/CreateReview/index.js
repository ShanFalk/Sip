import Navigation from "../../../Navigation";

const CreateReview = () => {
    return (
        <>
        <Navigation />
        <div className='review-container'>
            <h1>Business Name</h1>
            <div className='review-form-container'>
                <form>
                    <div>
                        <label>Enter your rating</label>
                        <input type='number' min='1' max='5'/>
                        <textarea placeholder="Doesn't look like much when you walk past, but I was practically dying of thirst so I popped in. The definition of a hole-in-the-wall. I got the regular iced black tea and wow…  there are no words. A classic tea done right. Robust flavor, ice cold; the perfect afternoon pick-me-up. There's about a million options available between the menu board and wall full of specials, so it can get a little overwhelming, but you really can't go wrong. Not much else to say besides go see for yourself! You won't be disappointed."/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>

        </div>
        </>
    )
}

export default CreateReview;
