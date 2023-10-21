import React from "react";
import { Parallax } from "react-parallax";

const SectionCover = ({ backgroundImage, title, description }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={backgroundImage}
      strength={500}
    >
      <div className="h-screen flex flex-col justify-center items-center text-white w-3/4 mx-auto text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg mt-2">{description}</p>
      </div>
    </Parallax>
  );
};

export default SectionCover;
