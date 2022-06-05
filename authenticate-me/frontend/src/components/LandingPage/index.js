import './LandingPage.css'
import Navigation from '../Navigation';

const LandingPage = () => {
    return (
        <>
        <Navigation />
        <div id='background-image-main'></div>
        <div className='wrap'>
            <div className='main'>
            <div className='splash-title-div'>
                <h1 className='splash-title'>A tea-lightful experience</h1>
            </div>
            </div>
        </div>
        </>
    )
}

export default LandingPage;
