import React from 'react';
import {
    Link
} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">Replace this with image</Link>

            <div class="navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <Link to="/art">Art</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;