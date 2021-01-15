import React from 'react';
import content from '../../content';

export default function DiscordButton() {
    return (
        <button onClick={event => window.open("https://discord.gg/7FhT8J85Z3")} className="bg-indigo-500 px-10 py-3 text-xl uppercase mt-auto rounded-lg rounded-3xl transition duration-500 transform hover:-translate-y-1 hover:scale-110">
            <strong>{content.header.discordText}</strong>
        </button>
    );
}
