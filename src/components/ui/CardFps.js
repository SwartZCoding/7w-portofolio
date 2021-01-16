import React from 'react';
import content from '../../content';
import TwitterButton from "../buttons/TwitterButton";

export default function CardFps() {

    return (

        <div className="bg-white pb-6 w-auto overflow-hidden md:max-w-sm rounded-3xl mx-12 border-4 border-gold-400 flex">
            <div className="relative h-40">
            </div>
            <div
                className="relative shadow mx-auto h-40 w-40 -my-16 rounded-full overflow-hidden">
                <img className="object-cover w-full h-full"
                     src={content.pages.fpsPhoto}/>
            </div>
            <div className="mt-16">
                <h1 className="text-lg text-center font-semibold">
                    7FPS
                </h1>
                <p className="text-sm text-gray-600 text-center">
                   France
                </p>

                <p className="mt-6 text-sm text-gray-600 text-center">
                    Gérant de Nexion & Orion. Graphiste à ses heures perdues.
                </p>
            </div>
            <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t">
                <TwitterButton/>
            </div>
        </div>
    );
}
