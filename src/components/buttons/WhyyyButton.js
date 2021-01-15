import React from 'react';
import content from '../../content';
import {Link as ScrollLink} from "react-scroll";

export default function WhyyyButton() {
    return (

        <ScrollLink to="stack" smooth={true}>
            <button className="button-whyyy px-10 py-3 text-xl m-3 uppercase mt-10 rounded-3xl transition duration-500 transform hover:-translate-y-1 hover:scale-110">
                <strong>{content.header.whyyText}</strong>
            </button>
        </ScrollLink>
    );
}
