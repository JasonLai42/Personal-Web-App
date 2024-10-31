import React from 'react';
import linkedin from './../../assets/personal img/linkedin.png';
import github from './../../assets/personal img/github.png';
import email from './../../assets/personal img/email.png'

export default function Footer() {
    return (
        <>
            <div>
                <a href="https://www.linkedin.com/in/jasonlai42/" target="_blank">
                    <img class="social-icon" src={linkedin}></img>
                </a>
                <a href="https://github.com/JasonLai42" target="_blank">
                    <img class="social-icon" src={github}></img>
                </a>
                <a href="mailto: jasondoeslai@gmail.com">
                    <img class="social-icon" src={email}></img>
                </a>
            </div>
            <div class="footer-text">
                Jason Lai 2024
            </div>
        </>
    );
}