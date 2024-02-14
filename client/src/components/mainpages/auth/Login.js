import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import logo_img from '../../headers/icon/transparent_logo.png'

const frontendUrl = process.env.FRONTEND_URL;
function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const loginSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${frontendUrl}/user/login`, { ...user });
            localStorage.setItem('firstLogin', true);
            window.location.href = '/';
        } catch (err) {
            console.log(err);
            alert(err.response.data.msg);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-header">
                    <img src={logo_img} alt="Logo" />
                    <br /><br /><br />
                    <h2>Welcome to Our Website !</h2>
                </div>
                <form onSubmit={loginSubmit}>
                    <h2>Login</h2>
                    <div className="input-container">
                        <i className="fas fa-envelope"></i>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email"
                            value={user.email}
                            onChange={onChangeInput}
                        />
                    </div>

                    <div className="input-container">
                        <i className="fas fa-lock"></i>
                        <input
                            type="password"
                            name="password"
                            required
                            autoComplete="on"
                            placeholder="Password"
                            value={user.password}
                            onChange={onChangeInput}
                        />
                    </div>

                    <div className="row">
                        <button type="submit">Login</button>
                        <Link to="/register">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;