import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import sipLogo from '../../images/teapot.png'
import './Navigation.css'

const Navigation = () => {

    const sessionUser = useSelector(state => state.sessionState.user)

    const onSubmit = (e) => {
        e.preventDefault();


    }

    return (
        <>
            <header className='header-main-page'>
                <ul className='nav-ul-list'>
                    <li><NavLink to='/' className='logo-link'>sip!<img className='logo' src={sipLogo} alt='a purple teapot and teacup'/>
                    </NavLink></li>
                    <div className='search-bar'>
                        <form className='search-form' onSubmit={onSubmit}>
                            <label className='search-label' htmlFor='term'></label>
                            <input className='search-input' type='search' name='term' placeholder='Queen Mary, Seattle, elegant...'></input>
                            <button className='search-button'>
                                <i className="fa-solid fa-magnifying-glass fa-2x"></i>
                            </button>
                        </form>
                    </div>
                    <div className='nav-li-list'>
                        {!sessionUser && <li><NavLink to='/login' className='nav-button nav-login'>Log In</NavLink></li>}
                        {!sessionUser && <li><NavLink to='/signup' className='nav-button nav-signup'>Sign Up</NavLink></li>}
                        {sessionUser && <li><NavLink to='/new-biz' className='add-biz-link'>Add a Business</NavLink></li>}
                        {sessionUser && <ProfileButton user={sessionUser} />}
                    </div>
                </ul>
            </header>
        </>
    )
};

export default Navigation;
