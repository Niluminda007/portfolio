import React from "react";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import "./customCursor.css";

export const CustomCursor = () => {
  const blobRef = useRef(null);
  const [mousePos, setMousePos] = useState({});
  useLayoutEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.pageX, y: e.pageY });
    };
    window.addEventListener("pointermove", handleMouseMove);

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);
  const blob = blobRef.current;
  if (blob !== null) {
    blob.animate(
      {
        left: `${mousePos.x}px`,
        top: `${mousePos.y}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  }
  return (
    <>
      <div
        className="blob h-512 xs:h-128 sm:h-128 md:h-256 lg:h-256"
        ref={blobRef}
      ></div>
      <div className="blur"></div>
    </>
  );
};
