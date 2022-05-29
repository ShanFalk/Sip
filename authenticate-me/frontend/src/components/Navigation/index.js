import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";

const Navigation = () => {

    const sessionUser = useSelector(state => state.sessionState.user)

    return (
        <>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            {!sessionUser && <li><NavLink to='/login'>Log In</NavLink></li>}
            {!sessionUser && <li><NavLink to='/signup'>Sign Up</NavLink></li>}
            {sessionUser && <li><button>Log Out</button></li>}
            {sessionUser && <ProfileButton />}
        </ul>
        </>
    )
};

export default Navigation;
