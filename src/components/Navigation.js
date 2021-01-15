import React from 'react';
import content from '../content';
import DiscordButton from "./buttons/DiscordButton";

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
          <DiscordButton />
        </div>
      </div>
    </div>
  );
}
