import React, { useContext, useState } from 'react';
import { GlobalState } from '../../GlobalState';
import Menu from './icon/menu.svg';
import Close from './icon/close.svg';
import Cart from './icon/cart.svg';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

import LogoImage from './icon/transparent_logo.png';

function Header() {
    const state = useContext(GlobalState);
    const [isLogged] = state.userAPI.isLogged;
    const [isAdmin] = state.userAPI.isAdmin;
    const [cart] = state.userAPI.cart;
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = state.productsAPI.search;
    // const [searchResultsEmpty, setSearchResultsEmpty] = useState(false);

    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    
    const logoutUser = async () => {
        await axios.get(`${backendUrl}/user/logout`);

        localStorage.removeItem('firstLogin');

        window.location.href = '/Pioneer_Plastics';
    }

    const adminRouter = () => {
        return (
            <>
                <li><Link to="/Pioneer_Plastics/create_product">Create Product</Link></li>
                <li><Link to="/Pioneer_Plastics/category">Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () => {
        if (isAdmin) {
            return (
                <>
                    <li><Link to="/Pioneer_Plastics" onClick={logoutUser}>Logout</Link></li>
                </>
            );
        } else if (isLogged) {
            return (
                <>
                    <li><Link to="/Pioneer_Plastics" onClick={logoutUser}>Logout</Link></li>
                </>
            );
        } else {
            return (
                <li><Link to="/Pioneer_Plastics/login">Login ✥ Register</Link></li>
            );
        };
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    const { pathname } = useLocation();

    // Conditionally render the search bar based on the pathname
    const shouldDisplaySearchBar = !['/Pioneer_Plastics/login', '/Pioneer_Plastics/cart', '/Pioneer_Plastics/register', '/Pioneer_Plastics/create_product', '/Pioneer_Plastics/category'].includes(pathname);

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1>
                    <Link to="/Pioneer_Plastics">{isAdmin ? 'Admin Panel' : <img src={LogoImage} alt="Your Logo" width="140" height="70" />}</Link>
                </h1>
            </div>

            {shouldDisplaySearchBar && (
    <div className="search-container" style={{ display: 'flex', justifyContent: 'right', alignItems: 'right' }}>
    <div className="search-bar" style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: '#548761', marginRight: '15px' }}>
            <i className="fas fa-search"></i>
        </span>

        <input
            type="text"
            value={search}
            placeholder="Search products..."
            onChange={(e) => {
                setSearch(e.target.value.toLowerCase())
            }}
            style={{
                maxWidth: '400px',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
                width:'300px',
                transition: 'border-color 0.3s',
            }}
        />
    </div>
</div>

)}


            <div className="menu-items">
                <ul style={styleMenu}>
                    {/* <li><Link to="/Pioneer_Plastics">{isAdmin ? 'Products' : 'Shop'}</Link></li> */}
                    {/* {isAdmin && adminRouter()}
                    {
                        isLogged ? loggedRouter() : <li><Link to="/Pioneer_Plastics/login">Login / Register</Link></li>
                    } */}

                    <li onClick={() => setMenu(!menu)}>
                        <img src={Close} alt="" width="30" className="menu" />
                    </li>
                </ul>
            </div>

            {/* {
                isAdmin ? ''
                    : <div className="cart-icon">
                        <span>{cart.length}</span>
                        <Link to="/Pioneer_Plastics/cart">
                            <img src={Cart} alt="" width="30" />
                        </Link>
                    </div>
            } */}
        </header>
    );
}

export default Header;