import React from "react";
import "./text.css";

export const Text = ({ isMobile, isTablet }) => {
  return (
    <div
      id="rssBlock"
      className={`${
        isMobile
          ? "absolute -left-[80px] top-[10px] w-[30vw]"
          : isTablet
          ? "absolute -left-[80px]  w-[20vw]"
          : "w-[18rem]"
      }`}
    >
      <p className="cnnContents">
        <span className="marqueeStyle text-4xl text-white xs:text-xl">
          &nbsp;Click To{" "}
          <span className="text-4xl text-purple font-bold xs:text-xl">
            {" "}
            Contact
          </span>
        </span>
      </p>
    </div>
  );
};
