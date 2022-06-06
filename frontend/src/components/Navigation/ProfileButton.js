import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { logoutUser } from "../../store/session";
import './Navigation.css';


const ProfileButton = ({user}) => {

    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const logOut = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
        history.push('/');
    }

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    }

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu])


    return (
        <div className="profile-icon-div">
               <button id='user-button' onClick={openMenu}>
                   <i className="fa-solid fa-circle-user fa-3x">
                    </i>
                </button>
                {showMenu && (
                    <ul className='profile-dropdown'>
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                        <li>
                            <button className='nav-button nav-logout' onClick={logOut}>Log Out</button>
                        </li>
                    </ul>
                )}
        </div>
    )
}

export default ProfileButton;
