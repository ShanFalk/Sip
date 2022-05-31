import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";

const Navigation = () => {

    const sessionUser = useSelector(state => state.sessionState.user)


    return (
        <>
        <div id='background-image-main'>
            <header>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    {!sessionUser && <li><NavLink to='/login'>Log In</NavLink></li>}
                    {!sessionUser && <li><NavLink to='/signup'>Sign Up</NavLink></li>}
                    {sessionUser && <ProfileButton user={sessionUser} />}
                </ul>
            </header>
        </div>


        </>
    )
};

export default Navigation;
