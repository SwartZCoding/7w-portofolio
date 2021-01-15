import React from 'react';
import content from '../content';

export default function Navigation() {
  return (
    <div
      style={{
        background: '#091c29',
      }}
    >
      <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-dosis">
        <h1 className="text-3xl font-bold transition duration-500 transform hover:-translate-y-1 hover:scale-110">
          {content.nav.logo}{' '}
          <span className="w-3 h-3 bg-blue-500 inline-block rounded-full"></span>
        </h1>
        <div>
          <button onClick={event => window.open("https://discord.gg/7FhT8J85Z3")} className="bg-indigo-500 px-10 py-3 text-xl uppercase mt-auto rounded-lg rounded-3xl transition duration-500 transform hover:-translate-y-1 hover:scale-110">
            <strong>{content.header.discordText}</strong>
          </button>
        </div>
      </div>
    </div>
  );
}
