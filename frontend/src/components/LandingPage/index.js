import './LandingPage.css'
import Navigation from '../Navigation';
import { useEffect } from 'react';
import { useState } from 'react';

const LandingPage = () => {

    const [background, setBackground] = useState('bg-one');

        const bgImages = ['bg-one', 'bg-two', 'bg-three'];
        let index = 1;

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setBackground(bgImages[index++]);
            if (index === bgImages.length) index = 0;
        },5000);

        return () => {
            clearInterval(imageInterval)
        }
    }, [])
    return (
        <>
        <Navigation />
        <div className={background}></div>
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
