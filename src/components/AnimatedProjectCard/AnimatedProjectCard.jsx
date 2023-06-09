import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SpecialHeading } from "../SpecialHeading/SpecialHeading";
import { AppContext } from "../../context/context";

export const AnimatedProjectCard = ({ item: { url, name, path } }) => {
  const { isMobile, isTablet } = useContext(AppContext);
  return (
    <>
      <SpecialHeading
        isNormal={true}
        heading={{ nav_name: name, path: path }}
        styleClass={`${
          isMobile
            ? "-translate-x-[40%] top-[14rem] heading-text-shadow"
            : isTablet
            ? "-translate-x-[65%] bottom-[10rem] heading-text-shadow"
            : "-translate-x-[70%] bottom-[8rem] animate-text-animation"
        } uppercase cursor-default text-white text-center -rotate-90  text-4xl absolute`}
      />
      <Link to={path}>
        <div
          className={`${
            isMobile
              ? "w-[75vw] aspect-[11/16] ml-16"
              : isTablet
              ? "w-[65vw] aspect-[10/16]"
              : "w-[450px] aspect-[12/16]"
          } screen relative overflow-hidden  border-solid border-3 border-[rgba(128,43,177,.7)] rounded-2xl bg bg-[rgba(128,43,177,.15)]`}
        >
          <span className="absolute bg-white w-[15%] h-[5px] z-[4] left-[50%] -translate-x-[50%] translate-y-[0%] top-0 rounded-bl-[1rem] rounded-br-[1rem]"></span>
          <div
            style={{
              backgroundImage: `url(${url})`,
              backgroundSize: "cover",
              backgroundPosition: "0% 0%",
            }}
            className={`${
              isMobile ? "" : isTablet ? "" : ""
            } absolute h-[100%] w-[100%]  image-filter opacity-[.8] animate-image-animation`}
          ></div>
          <div
            className={`${
              isMobile ? "" : isTablet ? "" : ""
            } screen__overlay absolute z-[2] left-0 top-0   bg-9 screen-gradient h-[100%] w-[100%] animate-screen-animation`}
          ></div>
          <div className="screen-content relative z-[3] w-[95%] h-[95%] aspect-12/16 border-solid border-[1px] border-[rgba(128,43,177,.5)] rounded-[0.6rem] pb-[6rem] m-4"></div>
          <span className="absolute bg-white w-[25%] h-[5px] z-[4] left-[50%] -translate-x-[50%] translate-y-[0%] bottom-0 rounded-tr-[1rem] rounded-tl-[1rem]"></span>
        </div>
      </Link>
    </>
  );
};
