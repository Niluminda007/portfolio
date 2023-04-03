import React from "react";
import "./tech.css";

const Tech = ({ technologies }) => {
  return (
    <div className="mt-8 flex flex-row flex-wrap justify-start relative ml-[-40px]">
      {technologies.map((technology, index) => (
        <div key={index} className="flex w-[200px] h-[140px]">
          <span className="-rotate-[90deg] translate-x-[75px] translate-y-[55px]">
            <span className="text-md text-purple">#</span>
            {technology.name}
          </span>

          <div className="icon-container">
            <div id="first" className="overlay-icon"></div>
            <div id="second" className="overlay-icon"></div>
            <div
              key={technology.name}
              className="hexagon"
              style={{ backgroundImage: `url(${technology.icon})` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tech;
