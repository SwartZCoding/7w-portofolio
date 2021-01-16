import {LazyLoadImage} from "react-lazy-load-image-component";
import content from "../../content";
import React from "react";

export default function CreationFps() {

    return (
        <div className="w-9/12 pt-8 mx-auto flex flex-row grid grid-cols-3 items-start justify-between">
            {content.creation.fps.map((tech, index) => {
                return (
                    <span className={'transform p-3 hover:scale-105 transition ease-in-out duration-300'}>
              <LazyLoadImage src={tech.img} alt={tech.alt}/>
            </span>
                );
            })}
        </div>
    );
}