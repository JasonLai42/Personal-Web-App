import React from 'react';
import {
    Link
} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav class="navbar-container">
            <ul class="navbar-ul">
                <li class="navbar-li"><Link to="/" class="navbar-text">Home</Link></li>
                <li class="navbar-li"><Link to="/art" class="navbar-text">Art</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar;