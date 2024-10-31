import React from 'react';
import linkedin from './../../assets/linkedin.png';
import github from './../../assets/github.png';
import email from './../../assets/email.png'

export default function Footer() {
    return (
        <>
            <div id="footer-container" class="footer-container">
                <div id="social-container" class="social-container">
                    <a href="https://www.linkedin.com/in/jasonlai42/" target="_blank">
                        <img id="linkedin-icon" class="social-icon" src={linkedin}></img>
                    </a>
                    <a href="https://github.com/JasonLai42" target="_blank">
                        <img id="github-icon" class="social-icon" src={github}></img>
                    </a>
                    <a href="mailto: jasondoeslai@gmail.com">
                        <img id="email-icon" class="social-icon" src={email}></img>
                    </a>
                </div>
                <div id="footer-text" class="footer-text">
                    Jason Lai 2024
                </div>
            </div>
        </>
    );
}