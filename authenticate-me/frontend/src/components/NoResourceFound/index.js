import noResource from '../../images/no-resource.jpg'

const NoResourceFound = () => {
    return (
        <>
        <div className='wrap'>
            <div className='main'>
                <h2 className='no-resource-h2'>Resource not found!</h2>
                <img src={noResource} />
            </div>
        </div>
        </>
    )
}

export default NoResourceFound;
