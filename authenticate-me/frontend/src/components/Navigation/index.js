import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import { loginUser } from "../../store/session";
import sipLogo from '../../images/teapot.png'
import './Navigation.css'
import SearchBar from "./SearchBar";

const Navigation = () => {

    const sessionUser = useSelector(state => state.sessionState.user)
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();

        setErrors([]);

        const user = {
            email: 'demo@user.io',
            password: 'password'
        }

         return dispatch(loginUser(user))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <>
            <header className='header-main-page'>
                <SearchBar />
                <ul className='nav-ul-list'>
                    <li><NavLink to='/' className='logo-link'>sip!<img className='logo' src={sipLogo} alt='a purple teapot and teacup'/>
                    </NavLink></li>
                    <div className='nav-li-list'>
                        {!sessionUser && <li><button onClick={onSubmit} className='nav-button nav-demo'>Demo</button></li>}
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
