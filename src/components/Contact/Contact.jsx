import React from "react";
import "./contact.css";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Clouds } from "../canvas/Clouds";
import { ContactForm } from "./ContactForm";
import SocialIcons from "../SocialIcons/SocialIcons";

export const Contact = () => {
  const { toggleMenu } = useContext(AppContext);

  return (
    <div
      className={`${
        !toggleMenu ? "z-[2]" : "z-[10]"
      } w-[100vw] h-[100vh] absolute inset-0 top-[0]`}
    >
      <div className=" absolute z-[100] right-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] xs:w-[80vw] xs:top-[58%]">
        <ContactForm />
      </div>

      <div className="w-[100vw] h-[100vh]">
        <Clouds />
      </div>
      <SocialIcons />
    </div>
  );
};
