import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../store/session';
import './SignupForm.css'
import sipLogo from '../../images/teapot.png'
import cafePic from '../../images/coffee-shop-clipart-8.jpg'

const SignupFormPage = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.sessionState.user);

    if (sessionUser) return (
        <Redirect to='/' />
    )

    const onSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {

            setErrors([]);

            const user = {
                username,
                email,
                password
            }

            return dispatch(signupUser(user))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
       return setErrors(['Password must match Confirm Password'])
    }

    return (
        <>
            <header>
                <Link className='logo-link' to='/'>sip!<img className='logo' src={sipLogo} alt='a purple teapot and teacup' />
                </Link>
            </header>
            <main>
                <img id='cafe-login-pic' src={cafePic} alt='a table and two chairs outside' />
                <div id='login-form-div'>
                    <div id='login-form-header'>
                        <h3>Sign Up for Sip!</h3>
                        <p className='page-font'>Connect with great local businesses</p>
                    </div>
                    <form id='login-form' onSubmit={onSubmit}>
                        <ul>
                            {errors.map((error, idx) => <li className='error-text' key={idx}>{error}</li>)}
                        </ul>
                        <input
                            className='form-field'
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
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
                        <input
                            className='form-field'
                            type='password'
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button className='page-font' type='submit'>Sign Up</button>
                    </form>
                    <div id='sub-text-div'>
                        <p>Already on Sip? Log in</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SignupFormPage;
