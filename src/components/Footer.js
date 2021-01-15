import React from 'react';
import content from '../content';

export default function Footer() {
    return (
        <div
            style={{
                background: '#091c29',
            }}
        >
            <div className="flex py-3 text-white font-dosis">
                <h1 className="text-3xl font-bold m-auto transition duration-500 transform hover:-translate-y-1 hover:scale-110">
                    {content.nav.logo}{' '}
                    <span className="w-4 h-3 bg-blue-500 inline-block rounded-full"></span>
                </h1>

                <h2 className="font-bold m-auto">
                    <button onClick={event => window.open("https://twitter.com/SwartZ__")} className="transition duration-500 transform hover:-translate-y-1 hover:scale-110">
                        Réalisé par Anto'
                    </button>
                </h2>
            </div>
        </div>
    );
}
