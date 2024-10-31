import React from 'react';
import Header from './../partials/Header';
import fun from './../../assets/personal img/fun.jpg';

export default function Root() {
    return (
        <>
            <Header />
            <div id="root-container" class="root-container">
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
        </>
    );
}