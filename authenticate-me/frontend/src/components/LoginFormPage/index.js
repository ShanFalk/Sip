import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  { loginUser } from '../../store/session';
import '../../styles/Form.css'
import sipLogo from '../../images/teapot.png'
import cafePic from '../../images/coffee-shop-clipart-8.jpg'

const LoginFormPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.sessionState.user );

    if (sessionUser) return (
       <Redirect to='/' />
    )

    const onSubmit = (e) => {
        e.preventDefault();

        setErrors([]);

        const user = {
            email,
            password
        }

         return dispatch(loginUser(user))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <>
        <header className='form-page-header'>
            <Link className='logo-link' to='/'>sip!<img className='logo' src={sipLogo} alt='a purple teapot and teacup'/>
            </Link>
        </header>
        <main>
            <img className='cafe-login-pic' src={cafePic} alt='a table and two chairs outside'/>
            <div className='login-form-div'>
                <div className='login-form-header'>
                    <h3>Log in to Sip!</h3>
                        <p className='page-font'>New to Sip? <Link to='/signup' className='other-form-link'>Sign up</Link></p>
                </div>
                <form className = 'login-form' onSubmit={onSubmit}>
                    <ul>
                        {errors.map((error, idx) => <li className='error-text' key={idx}>{error}</li>)}
                    </ul>
                    <input
                    className='form-field'
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                    className='form-field'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='page-font submit-button' type='submit'>Log In</button>
                </form>
                <div className='sub-text-div'>
                    <p>New to Sip? <Link to='/signup' className='other-form-link'>Sign up</Link></p>
                </div>
            </div>
        </main>
        </>
    )
}

export default LoginFormPage;
