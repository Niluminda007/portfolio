import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { CustomMenu } from "../CustomMenu/CustomMenu";
import "./menuContainer.css";

export const MenuContainer = () => {
  const { toggleMenu, SettoggleMenu } = useContext(AppContext);

  return (
    <>
      <div className="menuButton" onClick={SettoggleMenu}>
        <span className="menuButton__text">
          {toggleMenu ? "Close" : "Menu"}
        </span>
        <div
          className={`menuButton__icon ${
            toggleMenu ? "pointer-events-none" : "pointer-events-auto"
          } `}
        >
          <div
            className={`${
              toggleMenu
                ? "menuButton__icon_shape-1 menuButton__adjust"
                : "menuButton__icon_shape-1"
            }`}
          ></div>
          <div
            className={`${
              toggleMenu
                ? "menuButton__icon_shape-2 menuButton__adjust"
                : "menuButton__icon_shape-2"
            }`}
          ></div>
        </div>
      </div>
      <CustomMenu />
    </>
  );
};
