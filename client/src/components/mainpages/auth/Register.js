import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './login.css'; // Import the same CSS file used in login.js
import logo_img from '../../headers/icon/transparent_logo.png'


const backendUrl = process.env.REACT_APP_BACKEND_URL;
console.log("url is : ", backendUrl)

function Register() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const registerSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${backendUrl}/user/register`, { ...user }, {withCredentials: true, sameSite: 'none', secure : true});
            localStorage.setItem('firstLogin', true);
            window.location.href = '/Pioneer_Plastics';
        } catch (err) {
            alert(err.response.data.msg);
        }
    }

    return (
        <div className="login-page"> {/* Use the same class name as in login.js */}
            <div className="login-container"> {/* Use the same class name as in login.js */}
                <div className="login-header"> {/* Use the same class name as in login.js */}
                    <img src={logo_img} alt="Logo" />
                    <br /><br /><br />
                    <h2>Welcome to Our Website !</h2>
                </div>
                <form onSubmit={registerSubmit}>
                    <h2>Register</h2>
                    <div className="input-container">
                        <i className="fas fa-user"></i> {/* You can change the icon here if needed */}
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Name"
                            value={user.name}
                            onChange={onChangeInput}
                        />
                    </div>

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
                        <button type="submit">Register</button>
                        <Link to="/Pioneer_Plastics/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;