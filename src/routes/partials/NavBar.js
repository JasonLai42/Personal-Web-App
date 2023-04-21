import React from 'react';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/personal-web-app/">Replace this with image</a>

            <div class="navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/personal-web-app/about-me/">About Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/personal-web-app/resume/">Resume</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/personal-web-app/contact-me/">Contact Me</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;