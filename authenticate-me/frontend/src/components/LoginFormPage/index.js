import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  { loginUser } from '../../store/session';

const LoginFormPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.sessionState.user );
    console.log('are we here', sessionUser);

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
        <div id='login-form-div'>
            <p>These are the errors: {errors}</p>
            <form id = 'login-form' onSubmit={onSubmit}>
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
        </div>
    )
}

export default LoginFormPage;
