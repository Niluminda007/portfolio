import React from "react";
import BallCanvas from "../canvas/BallCanvas";

export const Skills = ({ technologies }) => {
  return (
    <div className="mt-8 flex flex-row flex-wrap gap-8">
      {technologies.map((technology, index) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};
