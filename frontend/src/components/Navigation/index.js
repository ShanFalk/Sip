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
                <div className='nav-list'>
                    <div className='nav-list-left'>
                        <div className='logo-div'>
                            <NavLink to='/' className='logo-link'>sip!<img className='logo' src={sipLogo} alt='a purple teapot and teacup' />
                            </NavLink>
                        </div>
                        <div className='search-bar-div'>
                            <SearchBar />
                        </div>
                    </div>
                    <div>
                        {!sessionUser && <button onClick={onSubmit} className='nav-button nav-demo'>Demo</button>}
                        {!sessionUser && <NavLink to='/login' className='nav-button nav-login'>Log In</NavLink>}
                        {!sessionUser && <NavLink to='/signup' className='nav-button nav-signup'>Sign Up</NavLink>}
                        {sessionUser && <NavLink to='/new-biz' className='add-biz-link'>Add a Business</NavLink>}
                        {sessionUser && <ProfileButton user={sessionUser} />}
                    </div>
                </div>
            </header>
        </>
    )
};

export default Navigation;
