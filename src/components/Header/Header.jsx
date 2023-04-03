import React from "react";
import "./header.css";
import { MenuContainer } from "../MenuContainer/MenuContainer";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/portfolio/");
  };
  return (
    <nav className="header px-16 py-8 xs:p-8">
      <div className="header__logo" onClick={handleClick}>
        <span className="header__logo-text text-[4rem] text-white ">U</span>
      </div>
      <MenuContainer />
    </nav>
  );
};
