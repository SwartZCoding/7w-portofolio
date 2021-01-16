import React from 'react';
import content from '../../content';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Bubble() {
    return (

        <div className="flex flex-wrap mt-10 justify-center">
            {content.header.mans.map((tech, index) => {
                return (
                    <span
                        className={`${
                            index % 2 === 0 ? ' animate-float' : ' animate-refloat'
                        } w-40 h-40 flex items-center p-6`}
                    >
              <LazyLoadImage className={"rounded-full"} src={tech.img} alt={tech.alt} />
            </span>
                );
            })}
        </div>
    );
}
