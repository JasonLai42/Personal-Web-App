import React from 'react';
import fun from './../../assets/personal img/fun.jpg';

export default function Root() {
    return (
        <>
            <div id="image-container" class="image-container">
                <img src={fun} alt="fun image" />
            </div>
        </>
    );
}