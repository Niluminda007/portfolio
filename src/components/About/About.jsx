import React, { useRef, useEffect, useContext } from "react";
import "./about.css";
import { AppContext } from "../../context/context";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollButton } from "../ScrollButton/ScrollButton";
import { ScrollTrigger } from "gsap/all";
import { technologies } from "../../utils/projectDetails";
import { SpecialHeading } from "../SpecialHeading/SpecialHeading";
import resume from "../../assets/nilumindaCV.pdf";
import { Skills } from "../Skills/Skills";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";

gsap.registerPlugin(ScrollTrigger);
export const About = () => {
  const leftTextBox = useRef();
  const textContainer = useRef();
  const { toggleMenu, isMobile, isTablet } = useContext(AppContext);
  const rootRef = useRef();

  const handleMouseMove = (e) => {
    if (leftTextBox.current && textContainer.current) {
      const divWidth = textContainer.current.offsetWidth;
      const mouseX = e.clientX - textContainer.current.offsetLeft;
      const percentage = ((mouseX / divWidth) * 100).toFixed(2);
      leftTextBox.current.style.width = `${percentage}%`;
    }
  };

  useEffect(() => {
    const element = textContainer.current;
    // document.body.classList.add("control-overflow");
    if (!element) return;
    element.onmousemove = (e) => handleMouseMove(e);

    return () => {
      element.removeEventListener("onmousemove", handleMouseMove);
      // document.body.classList.remove("control-overflow");
    };
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading1 = new SplitType("#heading1");
      const heading2 = new SplitType("#heading2");
      gsap.fromTo(
        ".about__header",
        {
          x: "-100%",
          autoAlpha: 0,
        },
        {
          x: "0%",
          delay: 0.5,
          autoAlpha: 1,
          duration: 1,
          ease: "Expo.easeOut",
        }
      );
      gsap.to(".char", {
        y: 0,
        stagger: 0.05,
        delay: 0.4,
        duration: 0.1,
      });
      gsap.fromTo(
        ".para",
        {
          y: "+100%",
          autoAlpha: 0,
        },
        {
          y: "0%",
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".about__header-info_image",
        {
          x: "+300%",
          autoAlpha: 0,
        },
        {
          x: "0%",
          delay: 0.5,
          autoAlpha: 1,
          duration: 2,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        ".about__header-info_image",
        {
          x: "+300%",
          autoAlpha: 0,
        },
        {
          x: "0%",
          delay: 0.5,
          autoAlpha: 1,
          duration: 2,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        ".smooth",
        {
          x: "-300%",
        },
        {
          scrollTrigger: {
            trigger: ".smooth",
            toggleActions: "restart pause reverse pause",
          },
          x: "0%",
          duration: 2,
          stagger: 0.05,
        }
      );
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className={`about ${toggleMenu ? "z-[0]" : "z-[100]"} `} ref={rootRef}>
      <div
        className={`${
          isTablet ? "flex-col" : ""
        } about__header xs:flex-col xs:p-0`}>
        <div
          className={`${isTablet ? "w-[90vw]" : ""} about__header-info`}
          ref={textContainer}>
          <div
            id="left-side"
            className={`${
              isTablet ? "w-[90vw] p-2" : ""
            } about__haeder-info_right side`}
            ref={leftTextBox}>
            <h1
              id="heading1"
              className={`${
                isTablet ? "w-[90vw]" : ""
              } text-5xl  text-purple w-[60rem] flex justify-center xs:text-4xl`}>
              About Me
            </h1>
            <p
              className={`${
                isTablet ? "w-[90vw]" : ""
              } w-[50rem] text-white-100 mt-[-10rem] font-medium text-lg para xs:text-[1rem] xs:w-[80vw] xs:mt-0`}>
              Hello there, I'm Ushan Niluminda. I love creating new and unique
              web desgins that get live on the internet. I started my way
              through web development couple of years ago. I think developing
              any sort of thing is an art and you are the artist and I'll be
              more than happy to paint something extrodinary for you.
            </p>
          </div>
          <div
            id="right-side"
            className={`${
              isTablet ? "w-[90vw] p-2" : ""
            } about__haeder-info_right side bg-purple`}>
            <h1
              id="heading2"
              className={`${
                isTablet ? "w-[90vw]" : ""
              } text-5xl  text-white w-[60rem] flex justify-center xs:text-4xl`}>
              About Me
            </h1>
            <p
              className={`${
                isTablet ? "w-[90vw]" : ""
              } w-[50rem] mt-[-10rem] text-black-100 font-medium text-lg para xs:text-[1rem] xs:w-[80vw] xs:mt-0`}>
              Hello there, I'm Ushan Niluminda. I love creating new and unique
              web desgins that get live on the internet. I started my way
              through web development couple of years ago. I think developing
              any sort of thing is an art and you are the artist and I'll be
              more than happy to paint something extrodinary for you.
            </p>
          </div>
        </div>
        <div className={`${isTablet ? "mt-8" : ""} about__header-info_image`}>
          <ProfilePhoto />
        </div>
        <ScrollButton />
      </div>

      <div
        id="about-tech"
        className="w-[100%] h-full bg-[transparent] smooth flex flex-col items-center ">
        <SpecialHeading
          index="0"
          heading={{ nav_name: "My Tech Stack", path: "/" }}
          styleClass="text-white text-3xl  flex justify-center mb-10 hover:bg-purple hover:text-white cursor-default"
          isNormal={true}
        />
        <Skills technologies={technologies} name="about" />
        <a href={resume} download="Resume" className="resume-link">
          <button className="w-[16rem] h-16 bg-purple text-white mt-12 text-lg pointer-cursor hover:text-purple hover:bg-dark hover:border-x-4">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};
