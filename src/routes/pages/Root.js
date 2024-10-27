import React from 'react';
import fun from './../../assets/personal img/fun.jpg';

export default function Root() {
    return (
        <>
            <div id="root-image-container" class="root-image-container">
                <img src={fun} alt="fun image" />
            </div>
            <div id="root-text-container" class="root-text-container">
                <div>Jason Lai</div>
                <div>Programmer, manga reader, cycling enjoyer, amateur cook, artist</div>
                <div>Previously @ Rev.com</div>
                <div>Current M.S. student @ Georgia Tech Computer Science</div>
            </div>
        </>
    );
}