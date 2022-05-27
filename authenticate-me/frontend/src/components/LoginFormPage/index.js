import { useState } from 'react';
import { useDispatch } from 'react-redux';
import  { loginUser } from '../../store/session';

const LoginFormPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {

    }

    return (
        <div id='login-form-div'>
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
                <button>Log In</button>
            </form>
        </div>
    )
}

export default LoginFormPage;
