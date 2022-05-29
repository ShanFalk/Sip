import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  { loginUser } from '../../store/session';
import './LoginForm.css'
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
        <header>
            <Link className='logo-link' to='/'>sip!<img class='logo' src={sipLogo}/>
            </Link>
        </header>
        <main>
            <img id='cafe-login-pic' src={cafePic}/>
            <div id='login-form-div'>
                <div id='login-form-header'>
                    <h3>Log in to Sip!</h3>
                    <p>New to Sip? Sign up</p>
                </div>
                <form id = 'login-form' onSubmit={onSubmit}>
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
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
                    <button type='submit'>Log In</button>
                </form>
                <div id='sub-text-div'>
                    <p>New to Sip? Sign up</p>
                </div>
            </div>
        </main>
        </>
    )
}

export default LoginFormPage;
