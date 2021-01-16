import React from 'react';
import content from '../../content';

export default function TwitterButton() {

    return (
        <button onClick={event => window.open("https://twitter.com/7FPSS")} className="bg-blue-600 px-10 py-3 text-xl uppercase mx-auto rounded-lg rounded-3xl transition duration-500 transform hover:-translate-y-1 hover:scale-110 text-white">
            <strong>Suivre</strong>
        </button>
    );
}
