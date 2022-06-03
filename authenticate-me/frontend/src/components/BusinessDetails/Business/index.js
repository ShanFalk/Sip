import './Business.css';


const Business = ({business}) => {

    return (
        <>
            <div className='biz-container'>
                <div className='biz-headline'>
                    <img className='biz-pic' src={business.imageUrl} />
                    <h1>{business.title}</h1>
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
