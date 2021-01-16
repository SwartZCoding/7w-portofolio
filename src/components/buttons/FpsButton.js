import React from 'react';
import content from '../../content';
import {Link as ScrollLink} from "react-scroll";
import {Link} from "react-router-dom";

export default function FpsButton() {
    return (
        <Link to={"/fps"}>
            <button className="button-fps px-10 py-3 text-xl m-1 uppercase mt-10 rounded-3xl transition duration-500 transform hover:-translate-y-1 hover:scale-110">
                <strong>{content.header.fpsText}</strong>
            </button>
        </Link>
    );
}
