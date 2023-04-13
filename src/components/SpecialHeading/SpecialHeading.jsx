import { useContext } from "react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";
import "./specialHeading.css";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const SpecialHeading = ({
  heading: { nav_name: text, path },
  styleClass,
  index,
  changeIndex,
  isNormal,
}) => {
  const iterationRef = useRef(0);
  const intervalRef = useRef(null);
  const targetRef = useRef(null);
  const { SettoggleMenu, isMobile, isTablet } = useContext(AppContext);

  useEffect(() => {
    const animate = () => {
      intervalRef.current = setInterval(() => {
        const newText = text
          .split("")
          .map((letter, index) => {
            if (index < iterationRef.current) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        targetRef.current.innerText = newText;
        if (iterationRef.current >= text.length) {
          clearInterval(intervalRef.current);
        }
        iterationRef.current += 1 / 3;
      }, 30);
    };

    const handleMouseOver = () => {
      iterationRef.current = 0;
      clearInterval(intervalRef.current);
      animate();
    };

    targetRef.current.addEventListener("mouseover", handleMouseOver);
    return () => {
      if (targetRef.current) {
        targetRef.current.removeEventListener("mouseover", handleMouseOver);
      }

      clearInterval(intervalRef.current);
    };
  }, [text]);
  const handleHover = (e) => {
    changeIndex(index);
  };
  const handleNavClick = () => {
    SettoggleMenu();
  };
  // sm:text-[3rem] md:text-[4rem] xs:text-[2rem] text-[5rem] pl-4 w-[40%]  rounded-l
  if (isNormal) {
    return (
      <h1 className={`${styleClass} `} ref={targetRef}>
        {text}
      </h1>
    );
  } else {
    return (
      <Link
        className={`${styleClass} ${
          isMobile ? "w-[110%]" : isTablet ? "w-[60%]" : "w-[40%]"
        } specialHeading sm:text-[3rem] md:text-[4rem] xs:text-[2rem] text-[5rem] pl-4 rounded-l`}
        ref={targetRef}
        onMouseOver={handleHover}
        to={path}
        onClick={handleNavClick}
      >
        {text}
      </Link>
    );
  }
};
