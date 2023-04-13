import React, { useState } from "react";
import { SpecialHeading } from "../SpecialHeading/SpecialHeading";
import "./customMenu.css";
import { navLinks } from "../../utils/navLinks";
import { useContext } from "react";
import { AppContext } from "../../context/context";
export const CustomMenu = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleMouseOver = (index) => {
    setActiveIndex(index);
  };
  const { toggleMenu, isMobile, isTablet } = useContext(AppContext);

  return (
    <div
      className={`menu ${
        toggleMenu ? "opacity-100 z-[10000]" : "opacity-0 -z-[1]"
      }  bg-[#121212] p-8 sm:p-4`}
    >
      <h1
        className={`${
          isMobile ? "w-[110%]" : isTablet ? "w-[60%]" : "w-[40%]"
        } menu__heading text-[#D1D7E0] sm:text-[3rem] md:text-[4rem] xs:text-[2rem] text-[5rem] bg-[#802BB1] rounded-l mb-8 xs:mb-4 pl-4`}
      >
        Menu
      </h1>
      <div className="menu__items">
        {navLinks.map((navLink, index) => {
          return (
            <SpecialHeading
              index={index}
              key={index}
              heading={navLink}
              styleClass="menu__items-link"
              changeIndex={handleMouseOver}
              isNormal={false}
            />
          );
        })}
      </div>
      <div
        className="menu__backgroundPattern"
        style={{
          backgroundPosition: `0% -${activeIndex * 25}%`,
        }}
      ></div>
      <div
        className="menu__backgroundImage"
        style={{
          backgroundPosition: `center ${activeIndex * 5 + 40}%`,
        }}
      ></div>
    </div>
  );
};
