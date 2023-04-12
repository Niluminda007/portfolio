import React from "react";
import { PolodoidCanvas } from "../canvas/PolodoidCanvas";
import "./contact.css";
import { ComputerCanvas } from "../canvas/ComputerCanvas";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Clouds } from "../canvas/Clouds";
import { useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  const { toggleMenu } = useContext(AppContext);
  const [clicked, setClick] = useState(false);
  const ref = useRef();
  const handleClick = () => {
    const tl = new gsap.timeline();
    tl.to(ref.current, {
      duration: 1,
      y: "-800%",
      perspective: 800,
      scale: 8,
      translateZ: 200,
      ease: "power3.out",
      onComplete: () => setClick(true),
    });
  };

  return (
    <div
      className={`${
        !toggleMenu ? "z-[2]" : "z-[10]"
      } w-[100vw] h-[100vh] absolute inset-0 top-[0]`}
    >
      {!clicked && (
        <div
          ref={ref}
          className="h-[80vh] w-[80vw] absolute z-[100] inset-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
          onClick={handleClick}
        >
          <ComputerCanvas />
        </div>
      )}
      {clicked && (
        <div className=" absolute z-[100] right-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] xs:w-[80vw] xs:top-[58%]">
          <ContactForm />
        </div>
      )}

      <div className="w-[100vw] h-[100vh]">
        <Clouds />
      </div>
    </div>
  );
};
