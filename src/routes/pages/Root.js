import React from 'react';
import fun from './../../assets/personal img/fun.jpg';

export default function Root() {
    return (
        <>
            <div id="main-container" class="main-container">
                <div id="header-container" class="header-container">
                    <div id="header-title" class="header-title">Software Engineer</div>
                    <div id="header-subtitle" class="header-subtitle">Rancho Cucamonga, California</div>
                </div>
                <div id="root-content-container" class="root-content-container">
                    <div id="root-image-border" class="root-image-border">
                        <div id="root-image-container" class="root-image-container">
                            <img src={fun} />
                        </div>
                    </div>
                    <div id="root-text-container" class="root-text-container">
                        <div>Jason Lai</div>
                        <div>Programmer, manga reader, cycling enjoyer, amateur cook, artist</div>
                        <div>Previously @ Rev.com</div>
                        <div>Current M.S. student @ Georgia Tech Computer Science</div>
                    </div>
                </div>
            </div>
        </>
    );
}