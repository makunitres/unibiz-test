import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/action';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const credentials = { email, password };
        dispatch(loginUser(credentials, navigate));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <br />
            <input
                placeholder='Enter your email'
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password</label>
            <br />
            <input
                placeholder='Enter your password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type='submit'>Login</button>
        </form>
    );
};
