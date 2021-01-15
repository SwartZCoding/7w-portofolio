import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';

export default function Stack() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center font-dosis"
      id="stack"
    >
      <h3 className="text-5xl font-bold justify-center mt-10">Les logiciels que nous utilisons :</h3>
      <div className="flex flex-wrap mt-10 justify-center transition duration-500 transform hover:-translate-y-1 hover:scale-110">
        {content.stack.tech.map((tech, index) => {
          return (
              <span
                  className={`${
                      index % 2 === 0 ? ' animate-float' : ' animate-refloat'
                  } w-40 h-40  flex items-center p-5`}
              >
              <LazyLoadImage src={tech.img} alt={tech.alt} />
            </span>
          );
        })}
      </div>
      <p className="w-11/12 md:max-w-xl text-xl text-center mt-10">
        {content.stack.desc}
      </p>
    </div>
  );
}
