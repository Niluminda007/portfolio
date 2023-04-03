import React from "react";
import { Link } from "react-router-dom";
import { SpecialHeading } from "../SpecialHeading/SpecialHeading";

export const AnimatedProjectCard = ({ item: { url, name, path } }) => {
  return (
    <>
      <SpecialHeading
        isNormal={true}
        heading={{ nav_name: name, path: path }}
        styleClass="uppercase cursor-default text-white text-center -rotate-90  text-4xl absolute -translate-x-[70%] bottom-[8rem] animate-text-animation"
      />
      <Link to={path}>
        <div className="screen relative overflow-hidden w-[450px] aspect-[12/16] border-solid border-3 border-[rgba(128,43,177,.7)] rounded-2xl bg bg-[rgba(128,43,177,.15)]">
          <span className="absolute bg-white w-[15%] h-[5px] z-[4] left-[50%] -translate-x-[50%] translate-y-[0%] top-0 rounded-bl-[1rem] rounded-br-[1rem]"></span>
          <div
            style={{
              backgroundImage: `url(${url})`,
              backgroundSize: "cover",
              backgroundPosition: "0% 0%",
            }}
            className="absolute h-[100%] w-[100%]  image-filter opacity-[.8] animate-image-animation"
          ></div>
          <div className="screen__overlay absolute z-[2] left-0 top-0   bg-9 screen-gradient h-[100%] w-[100%] animate-screen-animation"></div>
          <div className="screen-content relative z-[3] w-[95%] h-[95%] aspect-12/16 border-solid border-[1px] border-[rgba(128,43,177,.5)] rounded-[0.6rem] pb-[6rem] m-4"></div>
          <span className="absolute bg-white w-[25%] h-[5px] z-[4] left-[50%] -translate-x-[50%] translate-y-[0%] bottom-0 rounded-tr-[1rem] rounded-tl-[1rem]"></span>
        </div>
      </Link>
    </>
  );
};
