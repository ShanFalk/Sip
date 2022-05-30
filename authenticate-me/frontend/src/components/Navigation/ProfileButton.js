import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/session";


const ProfileButton = ({user}) => {

    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();

    const logOut = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
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
                   <i className="fa-solid fa-circle-user">
                    </i>
                </button>
                {showMenu && (
                    <ul className='profile-dropdown'>
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                        <li>
                            <button id='log-out-button' onClick={logOut}>Log Out</button>
                        </li>
                    </ul>
                )}
        </div>
    )
}

export default ProfileButton;
