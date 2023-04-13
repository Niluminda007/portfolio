import React, { useContext, useRef } from "react";
import { AppContext } from "../../context/context";
import { projectsCoverDetails } from "../../utils/projectDetails";
import { AnimatedProjectCard } from "../AnimatedProjectCard/AnimatedProjectCard";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const ProjectsScroll = () => {
  const { toggleMenu, isMobile, isTablet } = useContext(AppContext);
  const rootRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".container section");
      gsap.to(sections, {
        xPercent:
          (isMobile ? -120 : isTablet ? -120 : -100) * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".wrap",
          scrub: 1,
          end: "+=3000",
          pin: true,
          pinSpacing: true,
          markers: {
            startColor: "transparent",
            endColor: "transparent",
            fontSize: "1px",
          },
        },
      });
    }, rootRef);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div
        className={`${
          toggleMenu ? "z-[0]" : "z-[30]"
        }  fixed top-[7.5rem] bg-[dark] flex gap-10  justify-center items-center`}
      >
        <div
          className={`${
            isMobile
              ? "overflow-x-scroll overflow-y-hidden"
              : isTablet
              ? ""
              : "overflow-x-hidden"
          }wrapper  relative h-[100vh] w-[100vw]`}
        >
          <div
            ref={rootRef}
            className={`${
              isMobile ? "w-[360vw] " : isTablet ? "w-[360vw]" : "w-[240vw]"
            } container h-[80vh] flex`}
          >
            {projectsCoverDetails.map((item, index) => {
              return (
                <section
                  key={index}
                  className={`${
                    isMobile
                      ? "w-[90vw] px-[5vw] py-[8vw] mr-8 my-[5rem]"
                      : isTablet
                      ? "w-[90vw] px-[5vw] py-[4vw] ml-32"
                      : "w-[60vw] px-[20vw] py-[8vw]"
                  }`}
                >
                  <AnimatedProjectCard item={item} />
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
